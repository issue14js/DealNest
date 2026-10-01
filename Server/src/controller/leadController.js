import userModel from "../model/authModel.js";
import leadModel from "../model/leadModel.js";

async function createlead(req, res) {
  try {
    const { name, email, number, company, source } = req.body;
    const count = await leadModel.countDocuments();
    const leadId = `${String(count + 1).padStart(4, "0")}`;
    const lead = await leadModel.create({
      leadId,
      name,
      email,
      number,
      company,
      source,
      createdBy: req.user._id,
    });
    return res.status(200).json({
      message: "Lead Created Sucsessfully",
      lead,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Lead create falied !",
      err: err.message,
    });
  }
}

async function getleads(req, res) {
  try {
    let leads = [];

    if (req.user.role === "salesAgent") {
      leads = await leadModel
        .find({ assignedTo: req.user._id })
        .populate("createdBy", "name email")
        .populate("assignedTo", "name email");
    }

    if (req.user.role === "manager") {
      const team = await userModel.find({
        manager: req.user._id,
        role: "salesAgent",
      });

      const teamIds = team.map((user) => user._id);

      leads = await leadModel
        .find({ assignedTo: { $in: teamIds } })
        .populate("assignedTo", "name email")
        .populate("createdBy", "name email");
    }

    if (req.user.role === "admin") {
      leads = await leadModel
        .find()
        .populate("createdBy", "name email")
        .populate("assignedTo", "name email");
    }

    return res.status(200).json({
      message: "Lead fetched successfully",
      leads,
    });
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      message: "Failed to fetch leads",
      error: err.message,
    });
  }
}
async function getlead(req, res) {
  try {
    const { id } = req.params;
    const lead = await leadModel
      .findOne({ leadId: id })
      .populate("createdBy", "name email")
      .populate("assignedTo", "nmae email");

    if (!lead) {
      return res.status(404).json({
        message: "lead not found",
      });
    }
    // Sales Agent → sirf apni assigned lead
    if (
      req.user.role === "salesAgent" &&
      lead.assignedTo?._id.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        message: "You are not allowed to view this lead",
      });
    }
    return res.status(200).json({
      message: "lead featched sucsessfully",
      lead,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Failed to fetch lead",
      error: err.message,
    });
  }
}
export { createlead, getleads,getlead };
