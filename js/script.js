let wins = 0;
let losses = 0;

let rockBtn = document.querySelector('#rock-btn');
let paperBtn = document.querySelector('#paper-btn');    
let scissorsBtn = document.querySelector('#scissors-btn');

rockBtn.addEventListener("click", () => { playRound("rock") });
paperBtn.addEventListener("click", () => { playRound("paper") });
scissorsBtn.addEventListener("click", () => { playRound("scissors") });

function playRound(player){
    let computer = getComputerSelection();

    let result = "you choose: " + player + "\n computer choose: " + computer;
    console.log(result);

    if(player === computer){
        console.warn("its a tie!");

    } else if(computer === "rock" && player === "scissors"){
        losses++;
        console.warn("You lose!");

    } else if(computer === "paper" && player === "rock"){
        losses++;
        console.warn("You lose!");

    } else if(computer === "scissors" && player === "paper"){
        losses++;
        console.warn("You lose!");

    } else{
        wins++;
        console.warn("You won!");

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