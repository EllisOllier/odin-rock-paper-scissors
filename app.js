let playersOption;
let playersScore = 0;
let computersOption;
let computerScore = 0;
let options = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    computersOption = options[Math.floor(Math.random() * 3)];

    if(computersOption == "Rock"){
        document.getElementById("player-computer-roll").innerText = "🪨";
    }
    else if(computersOption == "Paper"){
        document.getElementById("player-computer-roll").innerText = "🧻";
    }
    else if(computersOption == "Scissors"){
        document.getElementById("player-computer-roll").innerText = "✂️";
    }
}

function chooseRock(){
    playersOption = "Rock";
    console.log("Player: " + playersOption);
    document.getElementById("player-you-roll").innerText = "🪨";

    getComputerChoice();
    updateScore();
}

function choosePaper(){
    playersOption = "Paper";
    console.log("Player: " + playersOption);
    document.getElementById("player-you-roll").innerText = "🧻";

    getComputerChoice();
    updateScore();
}

function chooseScissors(){
    playersOption = "Scissors";
    document.getElementById("player-you-roll").innerText = "✂️";
    getComputerChoice();
    updateScore();
}

function updateScore(){

    // Player Score
    if(playersOption == "Rock" && computersOption == "Scissors"){
        ++playersScore;
        document.getElementById("player-score").innerText = "You: " + playersScore;
    }
    else if(playersOption == "Paper" && computersOption == "Rock"){
        ++playersScore;
        document.getElementById("player-score").innerText = "You: " + playersScore;
    }
    else if(playersOption == "Scissors" && computersOption == "Paper"){
        ++playersScore;
        document.getElementById("player-score").innerText = "You: " + playersScore;
    }
    // Computer Score
    else if(computersOption == "Rock" && playersOption == "Scissors"){
        ++computerScore;
        document.getElementById("computer-score").innerText = "Computer: " + computerScore;
    }
    else if(computersOption == "Paper" && playersOption == "Rock"){
        ++computerScore;
        document.getElementById("computer-score").innerText = "Computer: " + computerScore;
    }
    else if(computersOption == "Scissors" && playersOption == "Paper"){
        ++computerScore;
        document.getElementById("computer-score").innerText = "Computer: " + computerScore;
    }

    if(playersScore == 5){
        document.getElementById("Objective").innerText = "Player Won!";
        disableButtons();
    }
    else if(computerScore == 5){
        document.getElementById("Objective").innerText = "Computer Won!";
        disableButtons();
    }
}

function disableButtons(){
    let buttons = document.getElementsByClassName("option-buttons");

    for(let i = 0; i < buttons.length; i++){
        buttons[i].disabled = true;
    }
}

function resetGame(){
    window.location.reload();
}

