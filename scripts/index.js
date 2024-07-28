let computerChoice = () => {
    let choices = ["rock", "paper", "scissors"];
    return choices[(Math.floor(Math.random() * choices.length))];
};

let playerScore = 0;
let computerScore = 0;
let result = document.createElement("p");
result.setAttribute("id", "result");
let containerQuery = document.querySelector(".container");
containerQuery.appendChild(result);
let resultOutput = document.querySelector("#result");

//lmao these are just the para men, still have to actually pass the function when calling play(para1, para2) lol
let play = (e, computerC) => {
    let computerMove = computerC();
    let humanMove = e.target.id;

    if((computerMove == "rock" && humanMove == "scissors") || (computerMove == "scissors" && humanMove == "paper") ||
    (computerMove == "paper" && humanMove == "rock")){
        computerScore++;
        resultOutput.textContent = "Computer Won - Score: " + computerScore;
    }
    else if((humanMove == "rock" && computerMove == "scissors") || (humanMove == "scissors" && computerMove == "paper") ||
    (humanMove == "paper" && computerMove == "rock")){
        playerScore++;
        resultOutput.textContent = "Player Won - Score: " + playerScore;
    }
    else{
        resultOutput.textContent = "It's a draw!";
    }
    if(playerScore == 5 || computerScore == 5){
        if(playerScore > computerScore){
            resultOutput.textContent = "Player Won"
        }
        else{
            resultOutput.textContent = "Computer Won"
        }
        playerScore = 0;
        computerScore = 0;
    }
}

const selections = document.querySelectorAll(".choice");
selections.forEach((selection) => {
    selection.addEventListener("click", function(e) {
        play(e, computerChoice);
    });
});