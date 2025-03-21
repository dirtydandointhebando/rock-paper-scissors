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
const computerChoice = (getComputerChoice());
console.log(computerChoice);

// Use a prompt to get the user's choice 

const humanChoice = prompt("Ready to play? Rock... paper... scissors!");
console.log(humanChoice);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock" && computerChoice === "rock") {
        console.log("Both choose rock! It's a draw!");
        console.log(`Computer score is still ${computerScore}. Human score is still ${humanScore}.`);
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "Paper") {
        console.log("Paper beats rock! Computer wins!");
        computerScore++
        console.log(`Computer score is now ${computerScore}. Human score is ${humanScore}.`);
    } else if (humanChoice.toLowerCase() === "rock" && computerChoice === "Scissors") {
        console.log("Rock beats scissors! Meatbag wins!");
        humanScore++
        console.log(`Computer score is now ${computerScore}. Human score is ${humanScore}.`);
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        console.log("Paper beats rock! Meatbag wins!");
        humanScore++
        console.log(`Computer score is now ${computerScore}. Human score is ${humanScore}.`);
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "paper") {
        console.log("Both choose paper! It's a draw!");
        console.log(`Computer score is still ${computerScore}. Human score is still ${humanScore}.`);
    } else if (humanChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
        console.log("Scissors beats paper! Computer wins!");
        computerScore++
        console.log(`Computer score is now ${computerScore}. Human score is ${humanScore}.`);
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
        console.log("Rock beats scissors! Computer wins!");
        computerScore++
        console.log(`Computer score is now ${computerScore}. Human score is ${humanScore}.`);
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        console.log("Scissors beats paper! Meatbag wins!");
        humanScore++
        console.log(`Computer score is now ${computerScore}. Human score is ${humanScore}.`);
    } else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "scissors") {
        console.log("Both choose paper! It's a draw!");
        console.log(`Computer score is still ${computerScore}. Human score is still ${humanScore}.`);
    }
}

while (computerScore <= 5 || humanScore <= 5) {
    const humanChoice = prompt("Ready to play? Rock... paper... scissors!");
    console.log(humanChoice);
    console.log(computerChoice);
    playRound(humanChoice, computerChoice);
}