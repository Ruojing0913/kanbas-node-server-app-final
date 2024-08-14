const quizzes = [
    {
      title: "Web Development Basics",
      description: "Test your knowledge of fundamental web development concepts",
      quizType: "Graded Quiz",
      points: 50,
      timeLimit: 30,
      questions: [
        {
          questionType: "Multiple Choice",
          title: "HTML Basics",
          points: 10,
          questionText: "What does HTML stand for?",
          choices: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyperlink and Text Markup Language",
            "Home Tool Markup Language"
          ],
          correctAnswer: "Hyper Text Markup Language"
        },
        {
          questionType: "True/False",
          title: "CSS Purpose",
          points: 10,
          questionText: "CSS is used for styling web pages.",
          correctAnswer: "true"
        },
        {
          questionType: "Fill in Blank",
          title: "JavaScript Function",
          points: 10,
          questionText: "To declare a function in JavaScript, you use the ________ keyword.",
          correctAnswer: "function",
          possibleAnswers: ["function", "func", "def"]
        },
        {
          questionType: "Multiple Choice",
          title: "HTTP Methods",
          points: 10,
          questionText: "Which HTTP method is used to retrieve data from a server?",
          choices: ["GET", "POST", "PUT", "DELETE"],
          correctAnswer: "GET"
        },
        {
          questionType: "True/False",
          title: "Responsive Design",
          points: 10,
          questionText: "Responsive web design is about creating web pages that look good on all devices.",
          correctAnswer: "true"
        }
      ]
    },
    {
      title: "JavaScript Fundamentals",
      description: "Test your understanding of core JavaScript concepts",
      quizType: "Graded Quiz",
      points: 50,
      timeLimit: 25,
      questions: [
        {
          questionType: "Multiple Choice",
          title: "Variable Declaration",
          points: 10,
          questionText: "Which keyword is used to declare a constant variable in JavaScript?",
          choices: ["var", "let", "const", "static"],
          correctAnswer: "const"
        },
        {
          questionType: "True/False",
          title: "Array Methods",
          points: 10,
          questionText: "The push() method adds new items to the beginning of an array.",
          correctAnswer: "false"
        },
        {
          questionType: "Fill in Blank",
          title: "Object Property Access",
          points: 10,
          questionText: "To access the properties of an object, you can use dot notation or ________ notation.",
          correctAnswer: "bracket",
          possibleAnswers: ["bracket", "square bracket", "[]"]
        },
        {
          questionType: "Multiple Choice",
          title: "Equality Operators",
          points: 10,
          questionText: "Which operator checks for equality without type coercion?",
          choices: ["==", "===", "=", "!="],
          correctAnswer: "==="
        },
        {
          questionType: "True/False",
          title: "Function Scope",
          points: 10,
          questionText: "Variables declared inside a function can be accessed from outside the function.",
          correctAnswer: "false"
        }
      ]
    },
    {
      title: "React Basics",
      description: "Test your knowledge of fundamental React concepts",
      quizType: "Graded Quiz",
      points: 50,
      timeLimit: 35,
      questions: [
        {
          questionType: "Multiple Choice",
          title: "React Components",
          points: 10,
          questionText: "What is the correct way to define a functional component in React?",
          choices: [
            "function MyComponent() { }",
            "class MyComponent extends React.Component { }",
            "const MyComponent = () => { }",
            "Both A and C"
          ],
          correctAnswer: "Both A and C"
        },
        {
          questionType: "True/False",
          title: "JSX Syntax",
          points: 10,
          questionText: "In JSX, you must return a single root element from a component.",
          correctAnswer: "true"
        },
        {
          questionType: "Fill in Blank",
          title: "React Hooks",
          points: 10,
          questionText: "The ________ hook is used to add state to functional components.",
          correctAnswer: "useState",
          possibleAnswers: ["useState", "usestate"]
        },
        {
          questionType: "Multiple Choice",
          title: "Props vs State",
          points: 10,
          questionText: "Which of the following is true about props in React?",
          choices: [
            "Props are immutable",
            "Props can be changed within a component",
            "Props are used for storing component state",
            "Props are only used in class components"
          ],
          correctAnswer: "Props are immutable"
        },
        {
          questionType: "True/False",
          title: "Virtual DOM",
          points: 10,
          questionText: "React uses a Virtual DOM to improve performance.",
          correctAnswer: "true"
        }
      ]
    }
  ];


import mongoose from 'mongoose';
  import QuizModel from './quizModel.js';

async function insertQuizzes(courseId, createdBy) {
  for (let quiz of quizzes) {
    const availableDate = new Date();
    const dueDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days from now
    const untilDate = new Date(dueDate.getTime() + 24 * 60 * 60 * 1000); // 1 day after dueDate

    const newQuiz = new QuizModel({
      ...quiz,
      courseId: "RS101",
      createdBy: createdBy,
      availableDate: availableDate,
      dueDate: dueDate,
      untilDate: untilDate,
      questions: quiz.questions.map((question) => ({ ...question, _id: new mongoose.Types.ObjectId().toString() }))
    });
    await newQuiz.save();
  }
}


export  default insertQuizzes;