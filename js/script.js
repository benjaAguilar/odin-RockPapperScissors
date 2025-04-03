var pcHealth = 5;
var playerHealth = 5;
var rockBtn = document.querySelector("#rock-btn");
var paperBtn = document.querySelector("#paper-btn");
var scissorsBtn = document.querySelector("#scissors-btn");
var resetBtn = document.querySelector("#reset");
rockBtn === null || rockBtn === void 0 ? void 0 : rockBtn.addEventListener("click", function () {
    playRound("rock");
});
paperBtn === null || paperBtn === void 0 ? void 0 : paperBtn.addEventListener("click", function () {
    playRound("paper");
});
scissorsBtn === null || scissorsBtn === void 0 ? void 0 : scissorsBtn.addEventListener("click", function () {
    playRound("scissors");
});
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", function () {
    location.reload();
});
if (resetBtn)
    resetBtn.style.display = "none";
function playRound(playerSelection) {
    var pcSelection = getPcSelection();
    showSelection(playerSelection, pcSelection);
    var resultSection = printResults(playerSelection, pcSelection);
    if (!resultSection) {
        alert("Oops there was an unknown problem!");
        location.reload();
        return;
    }
    if (playerSelection === pcSelection) {
        resultSection.textContent = "its a tie!";
    }
    else if (pcSelection === "rock" && playerSelection === "scissors") {
        healthSystem("player");
        resultSection.textContent = "You lose!";
    }
    else if (pcSelection === "paper" && playerSelection === "rock") {
        healthSystem("player");
        resultSection.textContent = "You lose!";
    }
    else if (pcSelection === "scissors" && playerSelection === "paper") {
        healthSystem("player");
        resultSection.textContent = "You lose!";
    }
    else {
        healthSystem("pc");
        resultSection.textContent = "You won!";
    }
}
function healthSystem(loseHealth) {
    if (loseHealth === "player") {
        var heart = document.querySelector(".player-lives img");
        heart.remove();
        playerHealth--;
    }
    else if (loseHealth === "pc") {
        var heart = document.querySelector(".pc-lives img");
        heart.remove();
        pcHealth--;
    }
    if (playerHealth === 0 || pcHealth === 0) {
        endGame();
    }
}
function getPcSelection() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    var computerSelection;
    if (randomNumber === 1) {
        computerSelection = "rock";
    }
    else if (randomNumber === 2) {
        computerSelection = "paper";
    }
    else {
        computerSelection = "scissors";
    }
    return computerSelection;
}
function showSelection(player, pc) {
    var playerImg = document.querySelector("#player-img");
    var pcImg = document.querySelector("#pc-img");
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
function printResults(player, computer) {
    var resultSection = document.querySelector(".results h2");
    var result = "you choose: " + player + " computer choose: " + computer;
    var para = document.querySelector("#para");
    para.textContent = result;
    return resultSection;
}
function endGame() {
    var finalScore;
    if (playerHealth > pcHealth) {
        finalScore = "YOU ARE VICTORIUS!";
    }
    else {
        finalScore = "DEFEATED!";
    }
    var parentNode = document.querySelector(".main h1");
    var endResult = document.createElement("h2");
    endResult.textContent = finalScore;
    parentNode.after(endResult);
    if (resetBtn)
        resetBtn.style.display = "block";
    if (rockBtn)
        rockBtn.disabled = true;
    if (paperBtn)
        paperBtn.disabled = true;
    if (scissorsBtn)
        scissorsBtn.disabled = true;
}
