let pcHealth = 5;
let playerHealth = 5;

let rockBtn = document.querySelector('#rock-btn');
let paperBtn = document.querySelector('#paper-btn');    
let scissorsBtn = document.querySelector('#scissors-btn');
let resetBtn = document.querySelector('#reset');

rockBtn.addEventListener("click", () => { playRound("rock") });
paperBtn.addEventListener("click", () => { playRound("paper") });
scissorsBtn.addEventListener("click", () => { playRound("scissors") });
resetBtn.addEventListener("click", () => {location.reload()});

resetBtn.style.display = "none";

function playRound(player){
    let pc = getPcSelection();

    showSelection(player, pc);
    let resultSection = printResults(player, pc);

    if(player === pc){
        resultSection.textContent = "its a tie!";

    } else if(pc === "rock" && player === "scissors"){
        healthSystem("player");
        resultSection.textContent = "You lose!";

    } else if(pc === "paper" && player === "rock"){
        healthSystem("player");
        resultSection.textContent = "You lose!";

    } else if(pc === "scissors" && player === "paper"){
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

function getPcSelection(){
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

function showSelection(player, pc){
    let playerImg = document.querySelector('#player-img');
    let pcImg = document.querySelector('#pc-img');

    switch(player){
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
    
    switch(pc){
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

function printResults(player, computer){

    let resultSection = document.querySelector('.results h2');

    let result = "you choose: " + player + " computer choose: " + computer;

    let para = document.querySelector('#para');
    para.textContent = result;

    return resultSection
}

function endGame(){
    let finalScore;

    if(playerHealth > pcHealth){
        finalScore = "YOU ARE VICTORIUS!";

    } else{
        finalScore = "DEFEATED!";

    }

    let parentNode = document.querySelector('.main h1');
    let endResult = document.createElement('h2');
    endResult.textContent = finalScore;
    parentNode.after(endResult);

    resetBtn.style.display = "block";
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    
}