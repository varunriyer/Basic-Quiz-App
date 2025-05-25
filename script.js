const { text } = require("express");

const questions = [
    {
        question: "Which country has 3 capital cities?",
        answers: [
            { text: "Mexico", correct: false },
            { text: "South Africa", correct: true },
            { text: "Brazil", correct: false },
            { text: "New Zealand", correct: false }
        ]
    },
    {
        question: "Which animal has 3 stomachs?",
        answers: [
            { text: "Camel", correct: false },
            { text: "Giraffe", correct: false },
            { text: "Platypus", correct: false },
            { text: "Cow", correct: true }
        ]
    },
    {
        question: "Name the band which made Mr. Brightside?",
        answers: [
            { text: "The Killers", correct: true },
            { text: "Goo Goo Dolls", correct: false },
            { text: "Snow Patrol", correct: false },
            { text: "Fleetwood Mac", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();
