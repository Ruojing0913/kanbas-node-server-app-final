import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: String,
    email: String,
    lastName: String,
    dob: Date,
    role: {
      type: String,
      enum: ["STUDENT", "FACULTY", "ADMIN", "USER"],
      default: "USER",
    },
    loginId: String,
    section: String,
    lastActivity: Date,
    totalActivity: String,
    quizAttempts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "QuizAttemptModel"
    }]
  },
  { collection: "users" }
);

const userModel = mongoose.model("UserModel",userSchema);

export default userModel;

