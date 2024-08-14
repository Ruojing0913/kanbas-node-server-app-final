import Lab5 from "./Lab5/index.js";
import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import UserRoutes from "./routes/userRoutes.js";
import CourseRoutes from "./routes/courseRoutes.js";
import session from "express-session";

import cors from "cors";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/route.js";
import QuizRoutes from "./routes/quizRoutes.js";
import QuizAttemptRoutes from "./routes/quizAttemptRoutes.js";
const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING
if (!CONNECTION_STRING) {
    exit(0);
}
// import insertQuizzes from "./models/testQuizes.js";
mongoose.connect(CONNECTION_STRING).then(() => console.log("Mongo DB has been connected")).catch((err) => console.log("Error occured ", err));
// insertQuizzes("66b751c091893bf56d000d4a", "66b72fa9216c4ff03bd93d87");
const app = express();
console.log(process.env.NODE_ENV);
console.log(process.env.NETLIFY_URL);
app.use(
    cors({
        credentials: true,
        origin:"https://test-frontend-five-coral.vercel.app"
    })
);
const sessionOptions = {
    secret: process.env.SESSION_SECRET || "kanbas",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));
app.use(express.json());
ModuleRoutes(app);
AssignmentRoutes(app);
Lab5(app);
CourseRoutes(app);
UserRoutes(app);
QuizRoutes(app);
QuizAttemptRoutes(app);

app.listen(process.env.PORT || 4000);
