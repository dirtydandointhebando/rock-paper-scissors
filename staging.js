function getComputerChoice() {
    const number = Math.floor(Math.random() * 3 + 1);
    if (number === 1) return "rock";
    else if (number === 2) return "paper";
    else if (number === 3) return "scissors"; 
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a draw! The score is still ${humanScore} for the human and ${computerScore} for the computer!`);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Rock beats scissors! Meatbag wins!");
        humanScore++;
        console.log(`Human score is now ${humanScore}. The computer's score is ${computerScore}.`);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Paper beats rock. The machine wins!");
        computerScore++
        console.log(`Human score is now ${humanScore}. The computer's score is ${computerScore}.`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Paper beats rock! Meatbag wins!");
        humanScore++;
        console.log(`Human score is now ${humanScore}. The computer's score is ${computerScore}.`);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Scissors beats paper! Machine wins!");
        computerScore++;
        console.log(`Human score is now ${humanScore}. The computer's score is ${computerScore}.`);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Scissors beats paper! Meatbag wins! What a play!");
        humanScore++;
        console.log(`Human score is now ${humanScore}. The computer's score is ${computerScore}.`);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Rock beats scissors! Meatbag loses.");
        computerScore++;
        console.log(`Human score is now ${humanScore}. The computer's score is ${computerScore}.`);
    }
}

function declareWinner() {
    if (humanScore > computerScore) {
        console.log(`That's it, folks! Meatbag wins ${humanScore} to ${computerScore}!`);
    } else if (humanScore < computerScore) {
        console.log(`That's it, folks! Computer wins ${computerScore} to ${humanScore}!`);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = prompt("Ready to play? Rock... paper... scissors!");
        let computerChoice = getComputerChoice();
        console.log(`Meatbag picks ${humanChoice.toLowerCase()} and The Machine picks ${computerChoice}.`);
        playRound(humanChoice, computerChoice);
    } 
    declareWinner();
}

playGame();