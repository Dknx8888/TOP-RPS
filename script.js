function getComputerChoice() {
    let comp = ""
    let res = Math.random();
    if (res < 0.3) {
        comp = "rock";
    }
    else if (res < 0.7) {
        comp = "paper";
    }
    else {
        comp = "scissors";
    }
    return comp;
}

function getHumanChoice() {
    let choice = prompt("What is your choice?");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let humanWon = false;
    let tie = false;

    if (humanChoice == computerChoice) {
        console.log("It's a tie!");
        tie = true;
    } else if (humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win!");
        humanWon = true;
    } else {
        console.log("You lose!");
        humanWon = false;
    }
    return {tie, humanWon};
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 6; i++) {
        let {tie, humanWon} = playRound(getHumanChoice(), getComputerChoice());
        if (humanWon) {
            humanScore++;
        } else if (tie) {
            continue;
        } else {
            computerScore++;
        }
    }
    console.log(`Your final score: ${humanScore}`);
    console.log(`The computer's final score: ${computerScore}`);
}

playGame();