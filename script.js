let inputone = document.querySelector(".inputone");
let buttonone = document.querySelector(".buttonone");
let headingone = document.querySelector(".headingone");
let errorone = document.querySelector(".errorone");

let inputtwo = document.querySelector(".inputtwo");
let buttontwo = document.querySelector(".buttontwo");
let headingtwo = document.querySelector(".headingtwo");
let errortwo = document.querySelector(".errortwo");

let wanna = document.querySelector(".wanna");
let heartsDiv = document.querySelector(".hearts");
let timerDisplay = document.querySelector(".timer");
let restartBtn = document.querySelector(".restartBtn");

let maxChances = 5;
let count = maxChances;
let timeLeft = 20; // seconds
let timer;

function renderHearts() {
  heartsDiv.innerHTML = "❤️".repeat(count) + "🤍".repeat(maxChances - count);
}

buttonone.addEventListener("click", function () {
  if (!inputone.value) {
    errorone.innerHTML = "Please enter a number";
    errorone.style.display = "block";
  } else if (!(inputone.value <= 10 && inputone.value > 0)) {
    errorone.innerHTML = "Enter a number between 1 - 10";
    errorone.style.display = "block";
  } else {
    headingtwo.style.display = "block";
    inputtwo.style.display = "inline-block";
    buttontwo.style.display = "inline-block";
    count = maxChances;
    renderHearts();
    timerDisplay.innerHTML = `Time Left: ${timeLeft}s`;
    startTimer();

    headingone.style.display = "none";
    inputone.style.display = "none";
    buttonone.style.display = "none";
    errorone.style.display = "none";
  }
});

buttontwo.addEventListener("click", function () {
  if (!inputtwo.value) {
    errortwo.innerHTML = "Please enter a number 🔢";
    errortwo.style.display = "block";
    return;
  } else if (isNaN(inputtwo.value) || !(inputtwo.value <= 10 && inputtwo.value > 0)) {
    errortwo.innerHTML = "Enter a number between 1 - 10";
    errortwo.style.display = "block";
    return;
  }

  errortwo.style.display = "none";

  let guess = Number(inputtwo.value);
  let answer = Number(inputone.value);

  if (guess === answer) {
    wanna.innerHTML = "Player Two wins 🥳🎉✨";
    wanna.style.color = "green";
    stopGame();
    return;
  } else if (guess > answer) {
    wanna.innerHTML = "Too high! 📈";
  } else {
    wanna.innerHTML = "Too low! 📉";
  }

  count--;
  renderHearts();
  inputtwo.value = "";
  inputtwo.focus();

  if (count === 0) {
    wanna.innerHTML = "Player Two loses 😔";
    wanna.style.color = "blue";
    stopGame();
  }
});

// Timer function
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.innerHTML = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      wanna.innerHTML = "⏰ Time’s up! Player Two loses 😔";
      wanna.style.color = "blue";
      stopGame();
    }
  }, 1000);
}

// Stop game
function stopGame() {
  clearInterval(timer);
  buttontwo.style.display = "none";
  inputtwo.style.display = "none";
  headingtwo.style.display = "none";
  restartBtn.style.display = "inline-block";
}

restartBtn.addEventListener("click", () => {
  location.reload(); // simple restart
});