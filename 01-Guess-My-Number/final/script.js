"use strict";

// -------------------------------------------
const secretNum = Math.floor(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNum;

let score = 20;

const checkBtn = document.querySelector(".check");
checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    document.querySelector(".message").textContent = `⛔  No number inserted `;
  } else if (guess === secretNum) {
    document.querySelector(".message").textContent = `✌️  Correct number ! `;
  } else if (guess > secretNum) {
    if (score > 1) {
      document.querySelector(".message").textContent = `📈  Too High `;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `📉  Too Low `;
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else if (guess < secretNum) {
    document.querySelector(".message").textContent = `📉  Too Low `;
    score--;
    document.querySelector(".score").textContent = score;
  }
});
