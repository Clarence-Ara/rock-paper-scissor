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