// Computer Choice
function getComputerChoice() {
    let cpu_number = Math.random();
    let choice = ""
    if (cpu_number < 0.4 ) {
        choice = "Rock";
        return choice;
    } else if (cpu_number < 0.7 ) {
        choice = "Paper";
        return choice;
    } else {
        choice = "Scissor";
        return choice;
    }
}

// Human Choice
function getHumanChoice() {
    player_input = prompt("Press 1 for Rock | Press 2 for Paper | Press 3 for Scissor");
    player_choice = ""
    if (player_input == 1) {
        player_choice = "Rock";
        return player_choice;
    } else if (player_input == 2) {
        player_choice = "Paper";
        return player_choice;
    } else if (player_input == 3) {
        player_choice = "Scissor";
        return player_choice;
    } else {
        let error_msg = "Invalid input choice";
        return error_msg;
    }
}

// Players Score
let humanScore = 0;
let computerScore = 0;


// Single Round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        } else if (computerChoice === "Scissor") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            console.log("Draw");
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else if (computerChoice === "Scissor") {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        } else {
            console.log("Draw");
        }
    } else if (humanChoice === "Scissor") {
        if (computerChoice === "Paper") {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else if (humanChoice === "Rock") {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        } else {
            console.log("Draw");
        }
    } else {
        console.log("Invalid game");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);