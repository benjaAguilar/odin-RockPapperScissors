
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