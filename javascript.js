function computerPlay() {
    switch (Math.floor(Math.random()*3)+1) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors"
    }
}
const playerSelection = "Rock";
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        return "No winner, try again!";
    }
    if (playerSelection.toLowerCase() == "rock") {
        if (computerSelection.toLowerCase() == "paper") {
            return "You Lose! Paper beats Rock!";
        } else if (computerSelection.toLowerCase() == "scissors") {
            return "You Win! Rock beats Scissors!";
        }
    }
    if (playerSelection.toLowerCase() == "paper") {
        if (computerSelection.toLowerCase() == "rock") {
            return "You Win! Paper beats Rock!";
        } else if (computerSelection.toLowerCase() == "scissors") {
            return "You Lose! Scissors beats Paper!";
        }
    }
    if (playerSelection.toLowerCase() == "scissors") {
        if (computerSelection.toLowerCase() == "rock") {
            return "You Lose! Rock beats Scissors!";
        } else if (computerSelection.toLowerCase() == "paper") {
            return "You Win! Scissors beats Paper!";
        }
    }
}


console.log(playRound(playerSelection, computerSelection));