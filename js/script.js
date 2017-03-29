var button = document.getElementById("gameButton");
function generateNumber() {
	number = (Math.floor(Math.random()*3)+1);
	return number;
}
var playerTurn = 1;
var player1 = 0;
var score1 = document.getElementById("span1");
score1.innerText = 0;

var winMessage = document.getElementById("winner");
var winBlock = document.getElementById("winMessage");

var player2 = 0;
var score2 = document.getElementById("span2");
score2.innerText = 0;

var button = document.getElementById("startGame");
button.addEventListener("click", function(){
	if(playerTurn === 0){
		playerTurn++;
		startGame();
	} else if(playerTurn === 1){
		playerTurn--;
		startGame();
	} else {
	}
});

function checkForWin(){
	if(player1 > player2){
		winBlock.style.visibility = "visible";
		winMessage.innerText = "Player 1 Wins!";
	} else if (player2 > player1) {
		winBlock.style.visibility = "visible";
		winMessage.innerText = "Player 2 Wins!";
	} else {
		winBlock.style.visibility = "visible";
		winMessage.innerText = "TEST!!!";
	}
}

function startGame(){
	var timer = 0;
	var intervalID = setInterval(function(){ 
			generateNumber();
			if(number<=1) {
				document.getElementById("trump1").style.visibility="visible";
				setTimeout(function() {
					document.getElementById("trump1").style.visibility="hidden";
				},3000);
			} else if(number<=2) {
				document.getElementById("trump2").style.visibility="visible";
				setTimeout(function() {
					document.getElementById("trump2").style.visibility="hidden";
				},3000);
			} else {
				document.getElementById("trump3").style.visibility="visible";
				setTimeout(function() {
					document.getElementById("trump3").style.visibility="hidden";
				},3000);
			}
			document.getElementById("trump"+number).onclick=function(){
				this.style.visibility = 'hidden';
					if(playerTurn === 0){
						console.log(player1);
						player1 = player1 +1;
						console.log(player1);
						score1.innerText = player1;
					} else if (playerTurn === 1) {
						console.log(player2);
						player2 = player2 +1;
						console.log(player2);
						score2.innerText = player2;
					}
				generateNumber();
			};
			if (++timer === 20) {
       			window.clearInterval(intervalID);
   }
}, 1000);
}





