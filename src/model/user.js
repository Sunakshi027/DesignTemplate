
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },

    lastName: {
      type: String,
    },

    email: {
      type: String,
    },

    phone: {
      type: Number,
    },

    subject: {
      type: String,
    },

    message: {
      type: String,
    },
  },
  {
    timestamps:true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;