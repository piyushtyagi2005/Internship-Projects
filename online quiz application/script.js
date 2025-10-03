const quizData = [
  {
    question: "Which language is used for web development?",
    options: ["Python", "C++", "JavaScript", "Java"],
    answer: "JavaScript"
  },
  {
    question: "HTML stands for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks and Text Markup Language", "None"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which is used for styling web pages?",
    options: ["HTML", "CSS", "Python", "PHP"],
    answer: "CSS"
  }
];

let index = 0;
let score = 0;
let timeLeft = 30;
let timer;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const timeEl = document.getElementById("time");

function loadQuestion() {
  if (index < quizData.length) {
    const q = quizData[index];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach(opt => {
      const button = document.createElement("button");
      button.textContent = opt;
      button.className = "option";
      button.onclick = () => checkAnswer(opt);
      optionsEl.appendChild(button);
    });
  } else {
    endQuiz();
  }
}

function checkAnswer(selected) {
  if (selected === quizData[index].answer) {
    score++;
    alert("✅ Correct!");
  } else {
    alert("❌ Wrong! Correct answer: " + quizData[index].answer);
  }
  index++;
  loadQuestion();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timer);
  questionEl.style.display = "none";
  optionsEl.style.display = "none";
  nextBtn.style.display = "none";
  resultEl.textContent = `Your Score: ${score} / ${quizData.length}`;
}

nextBtn.onclick = () => {
  index++;
  loadQuestion();
};

loadQuestion();
startTimer();
