import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    courseId: {type:String, required:true},
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
        required: true
    },
    quizType: {
        type: String,
        enum: ['Graded Quiz', 'Practice Quiz', 'Graded Survey', 'Ungraded Survey'],
        default: 'Graded Quiz'
    },
    points: { type: Number, default: 0 },
    assignmentGroup: {
        type: String,
        enum: ['Quizzes', 'Exams', 'Assignments', 'Project'],
        default: 'Quizzes'
    },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: { type: Number, default: 20 }, // in minutes
    multipleAttempts: { type: Boolean, default: false },
    numberOfAttempts: { type: Number, default: 1 },
    showCorrectAnswers: { type: Boolean, default: false },
    accessCode: { type: String },
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestionsAfterAnswering: { type: Boolean, default: false },
    dueDate: { type: Date },
    availableDate: { type: Date },
    untilDate: { type: Date },
    isPublished: { type: Boolean, default: false },
    questions: [{
        _id: {type:String, required:true},
        questionType: {
            type: String,
            enum: ['Multiple Choice', 'True/False', 'Fill in Blank'],
            required: true
        },
        title: { type: String, required: true },
        points: { type: Number, required: true },
        questionText: { type: String, required: true },
        choices: [String], // for Multiple Choice
        correctAnswer: { type: String, required: true }, // for True/False and Fill in Blank
        possibleAnswers: [String] // for Fill in Blank
    }]
}, { collection: "quizzes" });

const QuizModel = mongoose.model("QuizModel", quizSchema);
export default QuizModel;