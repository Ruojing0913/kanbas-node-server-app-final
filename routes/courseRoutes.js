import * as courseController from '../controllers/courseController.js';

export default function CourseRoutes(app) {
    app.get('/api/courses', async (req, res) => {
        const courses = await courseController.findAllCourses();
        res.json(courses);
    });
    app.get('/api/courses/:id', async (req, res) => {
        const course = await courseController.findCourseById(req.params.id);
        res.json(course);
    });
    app.get('/api/courses/creator/:userId', async (req, res) => {
        const courses = await courseController.findCourseByCreator(req.params.userId);
        res.json(courses);
    });
    app.get('/api/courses/student/:userId', async (req, res) => {
        const courses = await courseController.findCourseByStudent(req.params.userId);
        res.json(courses);
    });

    app.post('/api/courses', async (req, res) => {
        const course = await courseController.createCourse(req.body);
        res.json(course);
    });
    app.put('/api/courses/:id', async (req, res) => {
        const status = await courseController.editCourse(req.params.id, req.body);
        res.json(status);
    });
    app.delete('/api/courses/:id', async (req, res) => {
        const status = await courseController.deleteCourse(req.params.id);
        res.json(status);
    });
    app.post('/api/courses/:courseId/enroll/:userId', async (req, res) => {
        const status = await courseController.enrollCourse(req.params.courseId, req.params.userId);
        res.json(status);
    });
}   