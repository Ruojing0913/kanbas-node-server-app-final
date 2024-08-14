import QuizModel from "../models/quizModel.js";
export const getAllQuizzes = () => QuizModel.find();
export const getQuizById = async (quizId) => {
    try {
        const quiz =  await QuizModel.findById(quizId);
        return quiz;
    }
    catch (err) {
        return null;
    }
}
export const getQuizzesWithCourseId = async (courseId) => {
    try {
        const quiz = await QuizModel.find({courseId: courseId});
        return quiz;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

export const publishQuiz = async (quizId) => {
    try {
        const quiz = await QuizModel.findById(quizId,{isPublished: 1});
        return QuizModel.findByIdAndUpdate(quizId, { isPublished: !quiz.get('isPublished') });
    }
    catch (err) {
        console.log(err);
        return null;
    }
};


export const deleteQuiz = async (quizId) => {
    try {
        return await QuizModel.findByIdAndDelete(quizId);
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

export const createQuiz = async (quiz) => {
    try {
        return await QuizModel.create(quiz);
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

export const updateQuiz = async (quizId, quiz) => {
    try {
        return await QuizModel.findByIdAndUpdate(quizId, quiz);
    }
    catch (err) {
        console.log(err);
        return null;
    }
}