// === Initial setup ===
const Questions = [
  {
    question: "what is the first letter in the alphabets ?",
    options: ["a", "b", "c", "d"],
    correct: 0,
  },
  {
    question: "what is the first book in the bible ?",
    options: ["revelation", "job", "Acts", "Genesis"],
    correct: 3,
  },
  {
    question: "what Data type make use of square bracket ?",
    options: ["object", "Array", "string", "Number"],
    correct: 1,
  },
  {
    question: "what Data type make use of square curly braces ?",
    options: ["object", "Array", "string", "Number"],
    correct: 0,
  },
  {
    question: " What does typeof 123 return ?",
    options: ["object", "Array", "string", "Number"],
    correct: 3,
  },
  {
    question: " Which of the following is NOT a JavaScript data type?",
    options: ["Boolean", "Float", "string", "Number"],
    correct: 1,
  },
  {
    question:
      "What is the correct way to declare a variable in JavaScript (ES6+)?",
    options: [
      "var myVar = 10;",
      "let myVar = 10;",
      "const myVar = 10",
      "All of the above",
    ],
    correct: 3,
  },
  {
    question: "Which one checks both value and type in JavaScript?",
    options: ["=", "==", "===", "!="],
    correct: 2,
  },
  {
    question:
      "Who has been endorsed by the APC as its sole candidate for the 2027 presidential election?",
    options: [
      "Nasir El-Rufai",
      "Yemi Osinbajo",
      "Bola Tinub",
      " Babajide Sanwo-Olu",
    ],
    correct: 2,
  },
  {
    question: "How many maternal deaths were recorded in Nigeria in 2023?",
    options: ["50,000", "25,000", "70,000", " 75,000"],
    correct: 3,
  },
  {
    question: " Which of the following plays was NOT written by Wole Soyinka?",
    options: [
      "The Lion and the Jewel",
      "The Gods Are Not to Blame",
      "A Dance of the Forests",
      "Death and the King's Horseman",
    ],
    correct: 3,
  },
];

const DisplayQuestion = document.querySelector("#displayquestion");
const score = document.querySelector("#score");
const main = document.querySelector("main");
const Button = document.querySelectorAll("button");

let currentQuestion = 0;
let points = 0;

// ✅ ADDED: To store user's answers and correctness
let userAnswers = [];

// === Display question and options ===
const display = () => {
  DisplayQuestion.textContent = Questions[currentQuestion].question;
  Questions[currentQuestion].options.forEach((option, index) => {
    Button[index].textContent = option;
  });
  Button.forEach((btn) => {
    btn.style.backgroundColor = "";
  });
};

// ✅ UPDATED Check function to save answers and call showResult()
const Check = (value, eachButton) => {
  const correctIndex = Questions[currentQuestion].correct;

  const userAnswer = {
    question: Questions[currentQuestion].question,
    selected: Questions[currentQuestion].options[value],
    correct: Questions[currentQuestion].options[correctIndex],
    isCorrect: value === correctIndex,
  };

  userAnswers.push(userAnswer);

  if (userAnswer.isCorrect) {
    eachButton.style.backgroundColor = "green";
    points++;
  } else {
    eachButton.style.backgroundColor = "red";
  }

  score.textContent = points;

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < Questions.length) {
      display();
    } else {
      showResult(); // ✅ CALL showResult after the last question
    }
  }, 2000);
};

// ✅ ADDED showResult function to display detailed feedback
const showResult = () => {
  let resultHTML = `
    <div class="text-white p-4">
      <h2 class="text-2xl mb-4">Game Over! Your Score: ${points}/${Questions.length}</h2>
      <ul class="space-y-4">
  `;

  userAnswers.forEach((item, index) => {
    resultHTML += `
      <li class="p-2 border-b border-gray-600">
        <strong>Q${index + 1}:</strong> ${item.question}<br/>
        <span class="${item.isCorrect ? "text-green-400" : "text-red-400"}">
          Your Answer: ${item.selected} ${item.isCorrect ? "✓" : "✗"}
        </span><br/>
        ${
          !item.isCorrect
            ? `<span class="text-green-300">Correct Answer: ${item.correct}</span>`
            : ""
        }
      </li>
    `;
  });

  resultHTML += `</ul></div>`;
  main.innerHTML = resultHTML;
};

// Start the quiz
display();
