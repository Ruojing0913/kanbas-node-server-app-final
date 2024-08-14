import mongoose from 'mongoose';
const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    number: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    department: { type: String, required: true },
    credits: { type: Number, required: true },
    description: { type: String, required: true },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
    },
    enrolledStudents: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel",
        },
    ],
  },
  { collection: "courses" }
);

const courseModel = mongoose.model("CourseModel", courseSchema);
export default courseModel;