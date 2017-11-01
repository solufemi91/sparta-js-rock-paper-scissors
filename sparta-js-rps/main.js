// Get input

function getUserInput(){
  return prompt("Please choose either 'rock', 'paper', or 'scissors'.");
}

//get the player move

function getPlayerMove(){
  return getUserInput();
}


//random play

function randomPlay(){

  var randomNumber  = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock"
  } else if (randomNumber ===1){
    return "paper";

  } else {
    return "scissors";
  }
}


//get the computer move

// will need to play to five

// check for a winner
