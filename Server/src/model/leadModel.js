import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    leadId: {
      type: String,
      unique: true,
    },
    avatar:{
      type:String,
      default: "/uploads/default-avatar.jpg"
    },
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    number: {
      type: String,
      required: true,
    },

    company: {
      type: String,
      required: true,
    },

    source: {
      type: String,
      required: true,
      enum: [
        "Website",
        "Referral",
        "Social Media",
        "Advertisement",
        "Cold Call",
        "Other",
      ],
    },

    status: {
      type: String,
      enum: ["New", "Contacted", "Qualified", "Proposal", "Won", "Lost"],
      default: "New",
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: "NO Assigned",
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const leadModel = mongoose.model("Lead", leadSchema);

export default leadModel;
