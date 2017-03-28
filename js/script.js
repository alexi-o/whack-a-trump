
// trumpImg.src = '../images/trump2.png';

// ctx.fillText('Spot 1', 140,103);
// ctx.fillText('Spot 2', 200,150);
// ctx.fillText('Spot 3', 50,150);

var button = document.getElementById("gameButton");
function generateNumber() {
	number = (Math.floor(Math.random()*3)+1);
	return number;
}

function startGame(){
		generateNumber();

		if(number<=1) {
			document.getElementById("trump1").style.display="block";
			setTimeout(function() {
				document.getElementById("trump1").style.display="none";
			},3000);
		} else if(number<=2) {
			document.getElementById("trump2").style.display="block";
			setTimeout(function() {
				document.getElementById("trump2").style.display="none";
			},3000);
		} else {
			document.getElementById("trump3").style.display="block";
			setTimeout(function() {
				document.getElementById("trump3").style.display="none";
			},3000);
		}
	}



