var computerOptions = ['rock', 'paper', 'scissors']

//Welcome page

alert("Welcome , let's play rock, paper and scissors")


// I want the game to restart after the first round
//Code block has been created
for (var i = 0; i < 5; i++){
var playerMove = prompt("Please pick a move from rock paper and scissors")



var computerMove = computerOptions[Math.floor(Math.random() * 3)]



if (computerMove == playerMove){
  alert("There is a tie")
} else if (playerMove == "paper" && computerMove == "rock" || playerMove == "rock" && computerMove == "scissors" || playerMove == "scisscors" && computerMove == "rock"){
  alert("Congratulations!!!, you won this round")
} else {
  alert("UNLUCKY MATE! The Computer has won this round")
}

}
