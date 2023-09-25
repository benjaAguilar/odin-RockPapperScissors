let playerSelection;

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