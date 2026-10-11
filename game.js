const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const computerMove = choices[Math.floor(Math.random() * choices.length)];

  return computerMove;
}

function getHumanChoice() {
  const humanMove = prompt(" make a choice:  rock , paper or scissors ");

  if (humanMove === null) {
    return "";
  }

  return humanMove.toLowerCase().trim();
}

function playGame() {
  let playerScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    let result = "";

    if (humanChoice === computerChoice) {
      result = "its a tie ";
      console.log(result);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      result = "You win ";
      console.log(result);
      playerScore++;
    } else {
      result = "you lose computer won this time ";
      console.log(result);
      computerScore++;
    }
  }
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  console.log(`computer score is ${computerScore}`);
  console.log(`your score is ${playerScore}`);

  if (playerScore > computerScore) {
    console.log(`you won:   ${playerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`computer won:its alright mate you can give up,
      or better play the game again  ${computerScore}`);
  } else {
    console.log("its a tie");
  }
}
playGame();
