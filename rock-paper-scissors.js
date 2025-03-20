/* Abstract: Rock paper scissors will require a few things...
    1) User input that is assigned to a variable
    2) A variable that randomly cycles between rock, paper, or scissors
    3) The user input and the second variable must be compared to each other in accordance to the rules of the game

*/

// Use the Math.random function to assign a value from 1-3 and then assign rock, paper, or scissors based on that value
function getComputerChoice() {
    const number = Math.floor(Math.random() * 3 + 1);
    if (number === 1) return "Rock";
    else if (number === 2) return "Paper";
    else if (number === 3) return "Scissors"; 
}

// Assign getComputerChoice() value to variable computerChoice
let computerChoice = (getComputerChoice());
console.log(computerChoice);

// Use a prompt to get the user's choice 

const userChoice = prompt("Ready to play? Rock... paper... scissors!")
console.log(userChoice);

/*
function winner(userChoice) {
    if (userChoice === "Rock" && computerChoice === "Scissors") {
        alert("Rock beats scissors! You win!");
    }
}

winner();
*/