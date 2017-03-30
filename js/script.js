var playerTurn = 0;// Variable will toggle between players to change which score is recorded

var player1 = 0;//initial score for player 1
var score1 = document.getElementById("span1");
score1.innerText = 0;//initial score displayed on the board for player 1

var player2 = 0;//initial score for player 2
var score2 = document.getElementById("span2");
score2.innerText = 0;//initial score displayed on the board for player 2

// Message box that displays over the game who won
var winMessage = document.getElementById("winner");
var winBlock = document.getElementById("winMessage");

// Game buttons, reset and start
var buttonStart = document.getElementById("startGame");
var buttonReset = document.getElementById("resetGame");

function generateNumber() {//function to randomly generate a number which will be used in below conditionals to trigger different Trump locations
	number = (Math.floor(Math.random()*3)+1);
	return number;
}


document.getElementById("gameTitle").onclick=function openFade(){
	this.classList = ("animate");
	setTimeout(function() {
		document.getElementById("gameTitle").style.visibility="hidden";
	}, 2000);
}


var time = 20;//rounds will be 20 seconds long, this time will display that time and countdown accordingly
function countDown(){
  setInterval(function(){
    if(time > 0){
      time--;
      timeLeft.innerText = time;			
    } else {
      return;
		}
	}, 1000);
}
// Reset button reloads the page
buttonReset.addEventListener("click", function(){
	window.location.reload();
});
// Start button with different actions for each player
buttonStart.addEventListener("click", function(){
	if(playerTurn === 0){
		playerTurn++; //Toggles between players
		startGame();
		countDown(); //Starts the timer
		setTimeout(function() {
		winBlock.style.visibility = "visible"; //Activates the winBlock to show the score after the round
		winMessage.innerText = player1 + " Points!";
	}, 22000)
	} else if(playerTurn === 1){
		winBlock.style.visibility = "hidden"; //Hides the winBlock from Player 1's round
		time = 21; // Sets the timer back at the start of the round for player 2
		playerTurn--; //Toggles between players
		startGame();
		setTimeout(function() {
		winBlock.style.visibility = "visible"; 
		winMessage.innerText = player2 + " Points!";
	}, 21000)
		setTimeout(function() {
			checkForWin();
			document.getElementById("startGame").style.visibility="hidden";
			document.getElementById("resetGame").style.visibility="visible";
		}, 25000);
	} else {
	}
});

function checkForWin(){//function triggers after player 2's round has ended to compare the final scores and determine a winner
	if(player1 > player2){
		winBlock.style.visibility = "visible";
		winMessage.innerText = "Player 1 Wins!";
	} else if (player2 > player1) {
		winBlock.style.visibility = "visible";
		winMessage.innerText = "Player 2 Wins!";
	} else {
		winBlock.style.visibility = "visible";
		winMessage.innerText = "It's a tie!!!";
	}
}

function startGame(){ //main game function that randomizes location and corresponding Trump images
	var timer = 0;
	document.getElementById("instructions").style.visibility = "hidden";
	var intervalID = setInterval(function(){ 
			generateNumber();
			if(number<=1) {
				document.getElementById("trump1").style.visibility="visible";
				setTimeout(function() {
					document.getElementById("trump1").style.visibility="hidden";
				},2000);
			} else if(number<=2) {
				document.getElementById("trump2").style.visibility="visible";
				setTimeout(function() {
					document.getElementById("trump2").style.visibility="hidden";
				},2000);
			} else {
				document.getElementById("trump3").style.visibility="visible";
				setTimeout(function() {
					document.getElementById("trump3").style.visibility="hidden";
				},2000);
			}
			document.getElementById("trump"+number).onclick=function(){
				this.style.visibility = 'hidden'; //removes the trump image on click and adds a point for the current player
					if(playerTurn === 1){
						console.log(player1);
						player1 = player1 +1;
						console.log(player1);
						score1.innerText = player1; //logs Player 1's score onto the board
					} else if (playerTurn === 0) {
						console.log(player2);
						player2 = player2 +1;
						console.log(player2);
						score2.innerText = player2;//logs Player 2's score onto the board
					}
				generateNumber(); //generates a random number to trigger different trump locations
			};
			if (++timer === 40) { //after 40 half second iterations, the round ends (20 seconds) 
       			window.clearInterval(intervalID);
   }
}, 500);
}
