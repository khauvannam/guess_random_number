"use strict";

let randomNumber = Math.trunc(Math.random() * 20) + 1;
console.log(randomNumber);
let score = 20;
let highScore = 0;
const displayMessage = (message) =>
  (document.querySelector(".message").textContent = message);
document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No number!");
  } else if (guess !== randomNumber) {
    if (score > 1) {
      guess < randomNumber
        ? displayMessage("TOO LOW! TRY AGAIN")
        : displayMessage("TOO HIGH! TRY AGAIN");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      displayMessage("You lost the game!");
    }
  } else if (guess === randomNumber) {
    if (highScore < score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector(".number").style.width = "30rem";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = randomNumber;
    displayMessage("Correct Number!");
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").style.width = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
});
