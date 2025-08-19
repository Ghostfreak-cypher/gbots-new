import mongoose from "mongoose";

const TeamMember = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    rollNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    course: {
      type: String,
      required: true,
      trim: true,
    },
    branch: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
    },
    activity: {
      type: Boolean,
      required: true,
      default: false,
    },
    Role: {
      type: String,
      enum: ["HOD", "Coordinator", "Assistant Coordinator"],
      required: true,
    },
    department: {
      type: String,
      required: true,
      trim: true,
    },
    yearOfLeaving: {
      type: Number,
      default: null,
    },
    isMember: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.TeamMember ||
  mongoose.model("TeamMember", TeamMember);
