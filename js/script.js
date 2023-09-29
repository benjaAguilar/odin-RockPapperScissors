let pcHealth = 5;
let playerHealth = 5;

let rockBtn = document.querySelector('#rock-btn');
let paperBtn = document.querySelector('#paper-btn');    
let scissorsBtn = document.querySelector('#scissors-btn');

rockBtn.addEventListener("click", () => { playRound("rock") });
paperBtn.addEventListener("click", () => { playRound("paper") });
scissorsBtn.addEventListener("click", () => { playRound("scissors") });

function playRound(player){
    let computer = getComputerSelection();

    let resultSection = printResults(player, computer);

    if(player === computer){
        resultSection.textContent = "its a tie!";

    } else if(computer === "rock" && player === "scissors"){
        healthSystem("player");
        resultSection.textContent = "You lose!";

    } else if(computer === "paper" && player === "rock"){
        healthSystem("player");
        resultSection.textContent = "You lose!";

    } else if(computer === "scissors" && player === "paper"){
        healthSystem("player");
        resultSection.textContent = "You lose!";

    } else{
        healthSystem("pc");
        resultSection.textContent = "You won!";

    }
}

function healthSystem(loseHealth){
    if(loseHealth === "player"){
        let heart = document.querySelector('.player-lives img');
        heart.remove();
        playerHealth--;

    } else if(loseHealth === "pc"){
        let heart = document.querySelector('.pc-lives img');
        heart.remove();
        pcHealth--;

    }

    if(playerHealth === 0 || pcHealth === 0){
        endGame();
    }
}

function game(){
    for(var i = 1; i <= 5; i++){
        playRound();

    }

    let roundResult = "you won: " + wins + " times" + "\n computer wons: " + losses + " times";
    console.log(roundResult);

    if(wins === losses){
        wins = 0;
        losses = 0;
        return "TIE!"

    } else if(wins > losses){
        wins = 0;
        losses = 0;
        return "YOU ARE VICTORIUS"

    } else{
        wins = 0;
        losses = 0;
        return "DEFEATED"

    }
}

function getComputerSelection(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerSelection;

    if(randomNumber === 1){
        computerSelection = "rock";

    } else if(randomNumber === 2){
        computerSelection = "paper";
    
    } else{
        computerSelection = "scissors";

    }

    return computerSelection;
}

function printResults(player, computer){

    let resultSection = document.querySelector('.results h2');

    let result = "you choose: " + player + " computer choose: " + computer;

    let para = document.querySelector('#para');
    para.textContent = result;

    return resultSection
}