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
