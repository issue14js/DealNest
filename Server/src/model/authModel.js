import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },
  avatar: {
    type: String,
     default: "/uploads/default-avatar.jpg"
  },
  role: {
    type: String,
    enum: ["admin", "manager", "salesAgent", "supportAgent"],
    default: "salesAgent",
    required: true,
  },
  number: {
  type: String,
  trim: true,
},

department: {
  type: String,
  enum: [
    "sales",
    "marketing",
    "development",
    "support",
    "hr",
  ],
},
manager: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  default: null
},
  lastLogin: {
    type: Date,
    default: null,
  },
  isActive: {
    type: Boolean,
    default: true,
  },

  timestamp: { type: Date, default: Date.now },
});

const userModel = mongoose.model("User", userSchema);

export default userModel;
