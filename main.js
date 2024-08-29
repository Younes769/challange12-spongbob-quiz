const questions = [
  {
    question: "What is SpongeBob's favorite hobby?",
    answers: ["Jellyfishing", "Karate", "Blowing bubbles", "Cooking"],
    correctAnswer: "Blowing bubbles",
  },
  {
    question: "What is the name of SpongeBob's pet snail?",
    answers: ["Gary", "Larry", "Terry", "Barry"],
    correctAnswer: "Gary",
  },
  {
    question: "What is the name of SpongeBob's best friend?",
    answers: ["Patrick", "Squidward", "Sandy", "Mr. Krabs"],
    correctAnswer: "Patrick",
  },
  {
    question: "What is the name of SpongeBob's boss?",
    answers: ["Patrick", "Squidward", "Sandy", "Mr. Krabs"],
    correctAnswer: "Mr. Krabs",
  },
  {
    question: "What is the name of SpongeBob's neighbor?",
    answers: ["Patrick", "Squidward", "Sandy", "Mr. Krabs"],
    correctAnswer: "Squidward",
  },
  {
    question: "What is the name of SpongeBob's squirrel friend?",
    answers: ["Patrick", "Squidward", "Sandy", "Mr. Krabs"],
    correctAnswer: "Sandy",
  },
    {
        question: "What is the name of the fast food restaurant where SpongeBob works?",
        answers: ["Krusty Krab", "Chum Bucket", "Weenie Hut Jr.", "Kelp Shake"],
        correctAnswer: "Krusty Krab",
    },
    {
        question: "What is the name of the rival restaurant to the Krusty Krab?",
        answers: ["Krusty Krab", "Chum Bucket", "Weenie Hut Jr.", "Kelp Shake"],
        correctAnswer: "Chum Bucket",
    },
    {
        question: "What is the name of the restaurant where only real tough guys can eat?",
        answers: ["Krusty Krab", "Chum Bucket", "Weenie Hut Jr.", "Kelp Shake"],
        correctAnswer: "Weenie Hut Jr.",
    },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".btn");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");

function startQuiz() {
  showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.textContent = question.question;
  answerButtons.forEach((button, index) => {
    button.textContent = question.answers[index];
    button.onclick = () => selectAnswer(button, question.correctAnswer);
  });
}

function selectAnswer(button, correctAnswer) {
  const selectedAnswer = button.textContent;
  if (selectedAnswer === correctAnswer) {
    score++;
    resultContainer.textContent = "Correct!";
  } else {
    resultContainer.textContent = `Wrong! The correct answer was: ${correctAnswer}`;
  }
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
    resultContainer.textContent = "";
    nextButton.style.display = "none";
  } else {
    showResults();
  }
});

function showResults() {
  questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
  answerButtons.forEach((button) => (button.style.display = "none"));
  nextButton.style.display = "none";
  resultContainer.textContent = "Quiz Completed!";
}

startQuiz();
