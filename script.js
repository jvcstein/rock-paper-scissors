console.log("Hello, World!");

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    return (compChoice == 0) ? "rock" : 
        (compChoice == 1) ? "paper" : "scissors";
}

function playRound(humanChoice, computerChoice) {
    console.log(`Computer: ${computerChoice}\nYou: ${humanChoice}`);
    if((computerChoice == "paper" && humanChoice == "rock") 
        || (computerChoice == "scissors" && humanChoice == "paper"
        || (computerChoice == "rock" && humanChoice == "scissors"))) {
        computerScore++;
        alert("Computer Wins!");
    } else if((humanChoice == "paper" && computerChoice == "rock") 
        || (humanChoice == "scissors" && computerChoice == "paper")
        || (humanChoice == "rock" && computerChoice == "scissors")) {
        humanScore++;
        alert("You win!");
    } else {
        alert("It's a draw!");
    }
    console.log(`You: ${humanScore}\nComputer: ${computerScore}`);
}

function playGame(humanChoice) {

    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    roundsPlayed++;
    
    if(roundsPlayed == 5) {
        if(computerScore > humanScore) {
            alert("Computer Wins the game! Better luck next time!");
        } else if(computerScore < humanScore) {
            alert("You Win the game! Congratulations!");
        } else alert("The game is a Draw!");

        humanScore, computerScore, roundsPlayed = 0;
    }
}

let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;


const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playGame("rock");
})

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playGame("paper");
})

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playGame("scissors");
})