import QuizAttemptModel from "../models/quizAttemptsModel.js";

export const getQuizAttemptsByUserIdQuizId = async (userId, quizId) => {
    try {
        return await QuizAttemptModel.find({ user: userId, quiz: quizId });
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

export const getQuizAttemptsByUserId = async (userId) => {
    try {
        return await QuizAttemptModel.find({ user: userId });
    }
    catch (err) {
        console.log(err);
        return null;
    }
}


export const createQuizAttempt = async (quizAttempt) => {
    try {
        return await QuizAttemptModel.create(quizAttempt);
    }
    catch (err) {
        console.log(err);
        return null;
    }
}

export const updateQuizAttempt = async (quizAttemptId, quizAttempt) => {
    try {
        return await QuizAttemptModel.findByIdAndUpdate(quizAttemptId, quizAttempt);
    }
    catch (err) {
        console.log(err);
        return null;
    }
}