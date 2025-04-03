let pcHealth = 5;
let playerHealth = 5;

let rockBtn = document.querySelector("#rock-btn") as HTMLButtonElement | null;
let paperBtn = document.querySelector("#paper-btn") as HTMLButtonElement | null;
let scissorsBtn = document.querySelector(
  "#scissors-btn"
) as HTMLButtonElement | null;
let resetBtn = document.querySelector("#reset") as HTMLElement | null;

rockBtn?.addEventListener("click", () => {
  playRound("rock");
});
paperBtn?.addEventListener("click", () => {
  playRound("paper");
});
scissorsBtn?.addEventListener("click", () => {
  playRound("scissors");
});
resetBtn?.addEventListener("click", () => {
  location.reload();
});

if (resetBtn) resetBtn.style.display = "none";

function playRound(playerSelection: string) {
  let pcSelection: string = getPcSelection();

  showSelection(playerSelection, pcSelection);
  let resultSection = printResults(playerSelection, pcSelection);

  if (!resultSection) {
    alert("Oops there was an unknown problem!");
    location.reload();
    return;
  }

  if (playerSelection === pcSelection) {
    resultSection.textContent = "its a tie!";
  } else if (pcSelection === "rock" && playerSelection === "scissors") {
    healthSystem("player");
    resultSection.textContent = "You lose!";
  } else if (pcSelection === "paper" && playerSelection === "rock") {
    healthSystem("player");
    resultSection.textContent = "You lose!";
  } else if (pcSelection === "scissors" && playerSelection === "paper") {
    healthSystem("player");
    resultSection.textContent = "You lose!";
  } else {
    healthSystem("pc");
    resultSection.textContent = "You won!";
  }
}

function healthSystem(loseHealth: string) {
  if (loseHealth === "player") {
    let heart = document.querySelector(".player-lives img") as HTMLElement;
    heart.remove();
    playerHealth--;
  } else if (loseHealth === "pc") {
    let heart = document.querySelector(".pc-lives img") as HTMLElement;
    heart.remove();
    pcHealth--;
  }

  if (playerHealth === 0 || pcHealth === 0) {
    endGame();
  }
}

function getPcSelection() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerSelection;

  if (randomNumber === 1) {
    computerSelection = "rock";
  } else if (randomNumber === 2) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }

  return computerSelection;
}

function showSelection(player: string, pc: string) {
  let playerImg = document.querySelector("#player-img") as HTMLImageElement;
  let pcImg = document.querySelector("#pc-img") as HTMLImageElement;

  switch (player) {
    case "rock":
      playerImg.src = "imgs/rock.svg";
      break;
    case "paper":
      playerImg.src = "imgs/paper.svg";
      break;
    case "scissors":
      playerImg.src = "imgs/scissors.svg";
      break;
  }

  switch (pc) {
    case "rock":
      pcImg.src = "imgs/rock.svg";
      break;
    case "paper":
      pcImg.src = "imgs/paper.svg";
      break;
    case "scissors":
      pcImg.src = "imgs/scissors.svg";
      break;
  }
}

function printResults(player: string, computer: string) {
  let resultSection = document.querySelector(".results h2");

  let result = "you choose: " + player + " computer choose: " + computer;

  let para = document.querySelector("#para") as HTMLElement;
  para.textContent = result;

  return resultSection;
}

function endGame() {
  let finalScore;

  if (playerHealth > pcHealth) {
    finalScore = "YOU ARE VICTORIUS!";
  } else {
    finalScore = "DEFEATED!";
  }

  let parentNode = document.querySelector(".main h1") as HTMLElement;
  let endResult = document.createElement("h2");
  endResult.textContent = finalScore;
  parentNode.after(endResult);

  if (resetBtn) resetBtn.style.display = "block";
  if (rockBtn) rockBtn.disabled = true;
  if (paperBtn) paperBtn.disabled = true;
  if (scissorsBtn) scissorsBtn.disabled = true;
}
