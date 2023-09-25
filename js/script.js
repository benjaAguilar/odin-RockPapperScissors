let wins = 0;
let losses = 0;

function playRound(){
    let computer = getComputerSelection();
    let player = getPlayerSelection();

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
    if(wins > losses){
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

function getPlayerSelection(){
    let playerSelection;
    let strPlayerSelection;
    do{
        playerSelection = prompt("type rock, paper or scissors!");
        strPlayerSelection = playerSelection.toLowerCase();

        if(strPlayerSelection === "rock" || strPlayerSelection === "paper" || strPlayerSelection === "scissors"){

            return strPlayerSelection

        } else{
            strPlayerSelection = ""
            alert("type error!");

        }

    } while(strPlayerSelection === "");

}