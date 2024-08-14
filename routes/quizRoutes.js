import * as quizController from '../controllers/quizController.js';

export default function QuizRoutes(app){
    app.get('/api/quizzes/quiz/:id', async (req, res) => {
        const quiz = await quizController.getQuizById(req.params.id);
        res.json(quiz);
    });
    
    app.get('/api/quizzes/course/:cid', async (req, res) => {
        const courseId = req.params.cid;
        const courses = await quizController.getQuizzesWithCourseId(courseId);
        res.json(courses);
    });


    app.get('/api/quizzes/publish/:id', async (req, res) => {
        const quizId = req.params.id;
        const quiz = await quizController.publishQuiz(quizId);
        res.json(quiz);
    });

    app.delete('/api/quizzes/:id', async (req, res) => {
        const quizId = req.params.id;
        const quiz = await quizController.deleteQuiz(quizId);
        res.json(quiz);
    });

    app.post('/api/quizzes', async (req, res) => {
        const quiz = req.body;
        const newQuiz = await quizController.createQuiz(quiz);
        res.json(newQuiz);
    });

    app.put('/api/quizzes/:id', async (req, res) => {
        const quizId = req.params.id;
        const quiz = req.body;
        console.log(quiz);
        const updatedQuiz = await quizController.updateQuiz(quizId, quiz);
        res.json(updatedQuiz);
    });
}