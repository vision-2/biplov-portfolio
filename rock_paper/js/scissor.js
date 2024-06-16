let choice = document.querySelectorAll('.choice');
let result = document.getElementById("result");
let score = document.getElementById("score");

let userScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;

for (let i = 0; i < choice.length; i++) {
    choice[i].addEventListener('click', () => {
        if (roundsPlayed < maxRounds) {
            let userChoice = choice[i].id;
            let computerChoice = getComputerChoice();
            roundsPlayed++;
            
            if (userChoice === computerChoice) {
                result.innerText = "Draw";
            } else if (
                (userChoice === "rock" && computerChoice === "scissor") ||
                (userChoice === "paper" && computerChoice === "rock") ||
                (userChoice === "scissor" && computerChoice === "paper")
            ) {
                result.innerText = "User wins";
                userScore++;
            } else {
                result.innerText = "Computer wins";
                computerScore++;
            }

            score.innerText = `User score = ${userScore}    Computer score = ${computerScore}`;
            if (roundsPlayed === maxRounds) {
                FinalResult();
            }
        }
    });
}

function getComputerChoice() {
    let computerChoices = ['rock', 'paper', 'scissor'];
    let computerIndex = parseInt(Math.random() * 3);
    return computerChoices[computerIndex];
}

function FinalResult() {
    if (userScore > computerScore) {
        result.innerText = "User wins the game!";
    } else if (computerScore > userScore) {
        result.innerText = "Computer wins the game!";
    } else {
        result.innerText = "The game is a draw!";
    }
}
