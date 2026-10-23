import mongoose from "mongoose";

const dealSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type:String,
      required: true,
    },
    lead: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lead",
      required: true,
    },
    value: {
      type: Number,
      min: 0,
    },
    stage: {
      type: String,
      enum: ["new", "qualified", "demo", "proposal", "negotiation", "won", "lost", "cancel"],
      default: "new",
      required: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    expectedCloseDate: {
      type: Date,
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

const dealModel = mongoose.model("Deal", dealSchema);

export default dealModel;
