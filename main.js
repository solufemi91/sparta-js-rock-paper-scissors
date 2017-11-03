var computerOptions = ['rock', 'paper', 'scissors']

//Welcome page

alert("Welcome , let's play rock, paper and scissors")

// ask for a move

var playerMove = prompt("Please pick a move from rock paper and scissors")

// generate the computer's move

var computerMove = computerOptions[Math.floor(Math.random() * 3)]

// compare values and give message

if (computerMove == playerMove) {
  alert("TIE")
} else if (playerMove == "paper" && computerMove == "rock" || playerMove == "rock" && computerMove == "scissors" || playerMove == "scisscors" && computerMove == "rock"){
  alert("I WON")
} else {
  alert("I LOST")
}
