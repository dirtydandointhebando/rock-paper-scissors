// Requirements
// 1. Assign rpc choice to computer using Math.random (done)
// 2. Use a prompt for user input (replace the prompt with buttons later)
// 3. Create a function that uses conditions play one round of rock paper scissors, log score of winner
// 4. Create a function that plays five rounds and determines a winner


function getComputerChoice() {
    const number = Math.floor(Math.random() * 3 + 1);
    if (number === 1) return "rock";
    else if (number === 2) return "paper";
    else if (number === 3) return "scissors"; 
}

const computerChoice = getComputerChoice();

console.log(getComputerChoice());
console.log(computerChoice);

let humanScore = 0;
let computerScore = 0;

const playRound = () => {
    if (humanChoice === computerChoice) {
        console.log(`It's a draw! The score is still ${humanScore} for the human and ${computerScore} for the computer!`);
    }
}