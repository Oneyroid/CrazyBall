var canvas = document.getElementById('canvas');
var ball = canvas.getContext('2d');
var ballRadius = 20;
var posX = 20;
var speedX = 5;
var posY = 20;
var speedY = 7;

function drawBall() {
	if (posY + speedY > canvas.height) {
		speedY = -15;
		ball.fillStyle = "red";
	} else if (posX + speedX > canvas.width) {
		speedX = -5;
		ball.fillStyle = "green";
	} else if (posY + speedY < 0) {
		speedY = 7;
		ball.fillStyle = "yellow";
	}
	else if (posX + speedX < 0) {
		speedX = 5;
		ball.fillStyle = "white";
	}


	ball.beginPath();
	ball.arc(posX, posY, ballRadius, 0, Math.PI*2, false);
	// ball.fillStyle = '#000';
	ball.fill();
	ball.closePath();
}

function draw() {
	ball.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	posX += speedX;
	posY += speedY;
}

setInterval(draw, 1000/30);
