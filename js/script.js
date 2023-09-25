function playRound(){
    let computer = getComputerSelection();
    let player = getPlayerSelection();
    let result = "you choose: " + player + "\n computer choose: " + computer;
    console.log(result);

    if(player === computer){
        return "its a tie!"

    } else if(computer === "rock" && player === "scissors"){
        return "You lose!"

    } else if(computer === "paper" && player === "rock"){
        return "You lose!"

    } else if(computer === "scissors" && player === "paper"){
        return "You lose!"

    } else{
        return "You won!"

    }
}

function game(){
    for(var i = 1; i <= 5; i++){

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