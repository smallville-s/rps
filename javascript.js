let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            game(button.id);
        });
    });

let playerResult = 0;
let computerResult = 0;
let result = document.getElementById("result");

function computerPlay() {
    switch (Math.floor(Math.random()*3)+1) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerScore = 0;
    computerScore = 0;
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "No winner.";
    }
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "paper") {
            computerScore = 1;
            return "You Lose! Paper beats Rock!";
        } else if (computerSelection.toLowerCase() == "scissors") {
            playerScore = 1;
            return "You Win! Rock beats Scissors!";
        }
    }
    if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") {
            playerScore = 1;
            return "You Win! Paper beats Rock!";
        } else if (computerSelection.toLowerCase() == "scissors") {
            computerScore = 1;
            return "You Lose! Scissors beats Paper!";
        }
    }
    if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection.toLowerCase() == "rock") {
            computerScore = 1;
            return "You Lose! Rock beats Scissors!";
        } else if (computerSelection.toLowerCase() == "paper") {
            playerScore = 1;
            return "You Win! Scissors beats Paper!";
        }
    }
}
     
function game(playerSelection) {
    const computerSelection = computerPlay();
    document.getElementById("game").textContent = playRound(playerSelection, computerSelection);
    
    playerResult+=playerScore;
    computerResult+=computerScore;
    
    document.getElementById("playerScore").textContent = playerResult;
    document.getElementById("computerScore").textContent = computerResult;
         
    if (playerResult >= 5 || computerResult >= 5) {
        if (playerResult > computerResult) {
            result.textContent = "You Win!";
            result.setAttribute("style", "color: green");
        } else if (playerResult == computerResult) {
            result.textContent = "No winner.";
        } else {
            result.textContent = "You Lose!";
            result.setAttribute("style", "color: red");
        }
        playerResult = 0;
        computerResult = 0;
        buttons.forEach(button => button.disabled = true);
        
        let restartGame = document.createElement('button');
        restartGame.textContent = "Start new game!";
        document.getElementById("restartGame").appendChild(restartGame);
        restartGame.setAttribute("onClick", "window.location.reload()");
    }  
}
