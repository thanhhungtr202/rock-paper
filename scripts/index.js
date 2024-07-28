let computerChoice = () => {
    let choices = ["rock", "paper", "scissors"];
    return choices[(Math.floor(Math.random() * choices.length))];
};

let playerScore = 0;
let computerScore = 0;

//lmao these are just the para men, still have to actually pass the function when calling play(para1, para2) lol
let play = (computerC, humanC) => {
    for(let i = 0; i < 5; i++){
        let computerMove = computerC();
        let humanMove = humanC();

        if((computerMove == "rock" && humanMove == "scissors") || (computerMove == "scissors" && humanMove == "paper") ||
        (computerMove == "paper" && humanMove == "rock")){
            computerScore++;
            console.log("Computer Score: " + computerScore);
        }
        else if((humanMove == "rock" && computerMove == "scissors") || (humanMove == "scissors" && computerMove == "paper") ||
        (humanMove == "paper" && computerMove == "rock")){
            playerScore++;
            console.log("Player Score: " + playerScore);
        }
        else{
            console.log("It's a draw!");
        }
    }
}

//pass in the function lmao, how else is it gonna access it if the para is undefined
play(computerChoice, humanChoice);