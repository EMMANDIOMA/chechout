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

const display = () => {
  DisplayQuestion.textContent = Questions[currentQuestion].question;
  Questions[currentQuestion].options.forEach((option, index) => {
    Button[index].textContent = option;
  });
  Button.forEach((Button) => {
    Button.style.backgroundColor = "";
  });
};

const Check = (value, eachButton) => {
  if (value === Questions[currentQuestion].correct) {
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
      main.textContent = `Gameover!! your score is ${points}`;
    }
  }, 2000);
};

display();
