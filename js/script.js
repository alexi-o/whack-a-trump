var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var stage = new Stage(canvas);

stage.mouseEventsEnabled = true;

trumpImg.src = "../images/trump1.png";

var randomPos = Math.floor(Math.random() * 3);

// Coordinates where a Trump can appear
var trumpsX =[140, 200, 50];
var trumpsY = [103, 150, 150];

var currentTrumps = 0;
var trumpWhacks = 0;
var totalTrumps = 3;

function Main()
{

}

ctx.fillText('Spot 1', 140,103);
ctx.fillText('Spot 2', 200,150);
ctx.fillText('Spot 3', 50,150);



// document.addEventListener('DOMContentLoaded', function() {

