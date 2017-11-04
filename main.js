var computerOptions = ['rock', 'paper', 'scissors']
var computerScore = 0
var playerScore = 0

alert("Welcome , let's play rock, paper and scissors")


while( computerScore < 5 && playerScore < 5){
var playerMove = prompt("Please pick a move from rock paper and scissors")

var computerMove = computerOptions[Math.floor(Math.random() * 3)]


if (computerMove == playerMove){

  alert("There is a tie. PlayerScore: "+ playerScore + " ComputerScore is " + computerScore)
} else if (playerMove == "paper" && computerMove == "rock" || playerMove == "rock" && computerMove == "scissors" || playerMove == "scisscors" && computerMove == "rock"){
  playerScore++
  alert("Congratulations!!!, you won this round. PlayerScore: " + playerScore + " ComputerScore is " + computerScore)
} else {
  computerScore++
  alert("UNLUCKY MATE! The Computer has won this round. PlayerScore: " + playerScore + " ComputerScore is " + computerScore)
}

} if (computerScore == 5){
  alert("The computer won the game. The final score is ComputerScore: " + computerScore + " PlayerScore: " + playerScore)

} else {
  alert("You have won the game. The final score is PlayerScore: " + playerScore + " ComputerScore: " + computerScore)
}
