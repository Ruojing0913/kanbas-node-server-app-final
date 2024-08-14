import * as quizAttemptController from '../controllers/quizAttemptController.js';

export default function QuizAttemptRoutes(app) {

    app.get('/api/quizAttempts/user/:userId/quiz/:quizId', async (req, res) => {
        const userId = req.params.userId;
        const quizId = req.params.quizId;
        const quizAttempts = await quizAttemptController.getQuizAttemptsByUserIdQuizId(userId, quizId);
        res.json(quizAttempts);
    });

    app.get('/api/quizAttempts/user/:userId', async (req, res) => {
        const userId = req.params.userId;
        const quizAttempts = await quizAttemptController.getQuizAttemptsByUserId(userId);
        res.json(quizAttempts);
    });

    // app.get('/api/quizAttempts/:id/:userId', async (req, res) => {
    //     const quizAttemptId = req.params.id;
    //     const userId = req.params.userId;
    //     const quizAttempt = await quizAttemptController.getQuizAttemptById(quizAttemptId, userId);
    //     res.json(quizAttempt);
    // });

    app.post('/api/quizAttempts', async (req, res) => {
        const quizAttempt = req.body;
        const newQuizAttempt = await quizAttemptController.createQuizAttempt(quizAttempt);
        res.json(newQuizAttempt);
    });

    app.put('/api/quizAttempts/:id', async (req, res) => {
        const quizAttemptId = req.params.id;
        const quizAttempt = req.body;
        const updatedQuizAttempt = await quizAttemptController.updateQuizAttempt(quizAttemptId, quizAttempt);
        res.json(updatedQuizAttempt);
    });
}