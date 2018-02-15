var canvas = document.getElementById('canvas');
var ball = canvas.getContext('2d');
var ballRadius = 10;
var posX = 10;
var speedX = 5;
var posY = 10;
var speedY = 7;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;

var rightPressed = false;
var leftPressed = false;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e){
	if (e.keyCode == 39) {
		rightPressed = true;
	}
	if (e.keyCode ==37) {
		leftPressed = true;
	}
}

function keyUpHandler(e){
	if (e.keyCode == 39) {
		rightPressed = false;
	}
	if (e.keyCode ==37) {
		leftPressed = false;
	}
}



if (rightPressed) {
	paddleX += 10;
} else {
	paddleX -=10;
}


function drawPaddle() {
	ball.beginPath();
	ball.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleWidth);
	// ball.fillStyle = "#0095dd";

	ball.fill();
	ball.closePath();
}

function drawBall() {
	if (posY + speedY > canvas.height) {
		speedY = -3;
		ball.fillStyle = "red";
	} else if (posX + speedX > canvas.width) {
		speedX = -10;
		ball.fillStyle = "green";
	} else if (posY + speedY < 0) {
		speedY = 15;
		ball.fillStyle = "yellow";
	}
	else if (posX + speedX < 0) {
		speedX = 10;
		ball.fillStyle = "blue";
	}

	if (rightPressed && paddleX < canvas.width - paddleWidth) {
		paddleX += 10;
	} else if (leftPressed && paddleX > 0) {
		paddleX -= 10;
	}

	ball.beginPath();
	ball.arc(posX, posY, ballRadius, 0, Math.PI*2, false);
	ball.fill();
	ball.closePath();
	drawPaddle();
}

function draw() {
	ball.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	posX += speedX;
	posY += speedY;
}

setInterval(draw, 1000/30);


