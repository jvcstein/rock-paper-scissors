console.log("Hello, World!");

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    return (compChoice == 0) ? "rock" : 
        (compChoice == 1) ? "paper" : "scissors";
}

function getHumanChoice() {
    let choice = prompt("Chose one:\nRock\nPaper\nScissors");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    console.log(`Computer: ${computerChoice}\nYou: ${humanChoice}`);
    if((computerChoice == "paper" && humanChoice == "rock") 
        || (computerChoice == "scissors" && humanChoice == "paper"
        || (computerChoice == "rock" && humanChoice == "scissors"))) {
        computerScore++;
        console.log("Computer Wins!");
    } else if((humanChoice == "paper" && computerChoice == "rock") 
        || (humanChoice == "scissors" && computerChoice == "paper")
        || (humanChoice == "rock" && computerChoice == "scissors")) {
        humanScore++;
        console.log("You Win!");
    } else {
        console.log("It's a Draw!");
    }
    console.log(`You: ${humanScore}\nComputer: ${computerScore}`);
}

function playGame() {
    for(let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if(computerScore > humanScore) {
        console.log("Computer Wins the game! Better luck next time!");
    } else if(computerScore < humanScore) {
        console.log("You Win the game! Congratulations!");
    } else console.log("The game is a Draw!")
}

let humanScore = 0;
let computerScore = 0;

playGame();