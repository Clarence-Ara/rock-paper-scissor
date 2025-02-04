// Players Score (Global variable)
let humanScore = 0;
let computerScore = 0;


// Computer Choice
function getComputerChoice() {
    let cpu_number = Math.random();
    if (cpu_number < 0.4 ) {
        return "Rock";
    } else if (cpu_number < 0.7 ) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

// Human Choice
function getHumanChoice() {
    player_input = prompt("Press 1 for Rock | Press 2 for Paper | Press 3 for Scissor");
    if (player_input == 1) {
        return "Rock";
    } else if (player_input == 2) {
        return "Paper";
    } else if (player_input == 3) {
        return "Scissor";
    } else {
        console.log("Invalid input choice");
        return getHumanChoice(); // Ask again if invalid input
    }
}



// Play single round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Draw round!")
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissor") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "scissor" && computerChoice === "Paper")
    ) {
        humanScore++;
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
    }
}


// Play for 5 rounds
function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (computerScore > humanScore) {
        console.log("You lose :(");
    } else {
        console.log("Its a tie!");
    }
}

// Start the game
playGame();