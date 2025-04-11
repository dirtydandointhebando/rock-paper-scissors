function getComputerChoice() {
    const number = Math.floor(Math.random() * 3 + 1);
    if (number === 1) return "rock";
    else if (number === 2) return "paper";
    else if (number === 3) return "scissors"; 
}

let humanScore = 0;
let computerScore = 0;

const output = document.querySelector("#output");
const choices = document.createElement("p");
const outcome = document.createElement("p");
const winner = document.createElement("p");

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        choices.textContent = `Both players pick ${humanChoice}.`;
        output.appendChild(choices);
        outcome.textContent = `It's a draw! The score is still ${humanScore} for the human and ${computerScore} for the computer!`;
        output.appendChild(outcome);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        choices.textContent = "Rock beats scissors! Meatbag wins!";
        output.appendChild(choices);
        humanScore++;
        outcome.textContent = `Human score is now ${humanScore}. The computer's score is ${computerScore}.`;
        output.appendChild(outcome);
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        choices.textContent = "Paper beats rock. The machine wins!";
        output.appendChild(choices);
        computerScore++
        outcome.textContent = `Human score is now ${humanScore}. The computer's score is ${computerScore}.`;
        output.appendChild(outcome);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        choices.textContent = "Paper beats rock! Meatbag wins!";
        output.appendChild(choices);
        humanScore++;
        outcome.textContent = `Human score is now ${humanScore}. The computer's score is ${computerScore}.`;
        output.appendChild(outcome);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        choices.textContent = "Scissors beats paper! Machine wins!";
        output.appendChild(choices);
        computerScore++;
        outcome.textContent = `Human score is now ${humanScore}. The computer's score is ${computerScore}.`;
        output.appendChild(outcome);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        choices.textContent = "Scissors beats paper! Meatbag wins! What a play!";
        output.appendChild(choices);
        humanScore++;
        outcome.textContent = `Human score is now ${humanScore}. The computer's score is ${computerScore}.`;
        output.appendChild(outcome);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        choices.textContent = "Rock beats scissors! Meatbag loses.";
        output.appendChild(choices);
        computerScore++;
        outcome.textContent = `Human score is now ${humanScore}. The computer's score is ${computerScore}.`;
        output.appendChild(outcome);
    }
    const declareWinner = () => {
        if (humanScore === 5) {
            winner.textContent = "That's five points for the human! One small win for man, one giant win for mankind!";
            output.appendChild(winner);
            humanScore = 0;
            computerScore = 0;
          }
        if (computerScore === 5) {
            winner.textContent = "That's five points for the machine! Man's days are numbered!";
            output.appendChild(winner);
            humanScore = 0;
            computerScore = 0;
          }
    }
    declareWinner();
}

const rockButton = document.querySelector("#rockButton");
rockButton.addEventListener("click", () => {
  let humanChoice = "rock";
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});

const paperButton = document.querySelector("#paperButton");
paperButton.addEventListener("click", () => {
  let humanChoice = "paper";
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});

const scissorsButton = document.querySelector("#scissorsButton");
scissorsButton.addEventListener("click", () => {
  let humanChoice = "scissors";
  let computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});

