const choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;
let gameOver = false;

const resultDiv = document.querySelector("#result");
const scoreDiv = document.querySelector("#score");
const winnerDiv = document.querySelector("#winner");
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
  const computerMove = choices[Math.floor(Math.random() * choices.length)];

  return computerMove;
}

function playRound(humanChoice, computerChoice) {
  if (gameOver) return;
  let result = "";

  if (humanChoice === computerChoice) {
    result = `its a tie you both chose${humanChoice} `;
    console.log(result);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You win ${humanChoice} beats ${computerChoice} `;

    playerScore++;
  } else {
    result = `you lose ${computerChoice} beats ${humanChoice}`;

    computerScore++;
  }

  resultDiv.textContent = result;
  scoreDiv.textContent = `your score : ${playerScore} | computer score: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    gameOver = true;

    if (playerScore === 5) {
      winnerDiv.textContent = ` Congratulations you have won this game `;
    } else {
      winnerDiv.textContent = `The computer won this game `;
    }
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}
document.querySelector("#rock").addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

document.querySelector("#paper").addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});
document.querySelector("#scissor").addEventListener("click", () => {
  playRound("scissor", getComputerChoice());
});
