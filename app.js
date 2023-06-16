let playersOption;
let computersOption;
let options = ["Rock", "Paper", "Scissors"]

// NOTE: May not be returning a valid answer every time
function getComputerChoice(){
    computersOption = options[Math.floor(Math.random() * 3)];
}



