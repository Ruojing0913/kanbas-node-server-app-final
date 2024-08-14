import mongoose from "mongoose";

const quizAttemptSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
    required: true
  },
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QuizModel",
    required: true
  },
  answers: [{
    questionId: mongoose.Schema.Types.ObjectId,
    answer: String,
    isCorrect: Boolean,
    points: Number
  }],
  score: { type: Number, required: true },
  attemptNumber: { type: Number, required: true },
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date }
}, { collection: "quizAttempts" });

const QuizAttemptModel = mongoose.model("QuizAttemptModel", quizAttemptSchema);
export default QuizAttemptModel;