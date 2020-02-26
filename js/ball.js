var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;
var ballRadius = 4;


/* Ball constructor */
var Ball = function () {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;

    this.xSpeed = (Math.random() * 6 - 3);
    this.ySpeed = (Math.random() * 6 - 3);

    var ballColors = ["black", "blue", "orange", "gold", "violet", "red"];
    this.randomColor = pickRandomBallColor(ballColors);
};

var pickRandomBallColor = function(colorsName) {
    return colorsName[Math.floor(Math.random() * colorsName.length)];
};


/* ball draw*/
var circle = function (x, y, radius, fillCircle) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
        ctx.fill();
    } else {
        ctx.stroke();
    }
};

Ball.prototype.draw = function () {
    ctx.fillStyle = this.randomColor;
    circle(this.x, this.y, ballRadius, true);
};

/* ball move*/
Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};

/* ball reflect */

Ball.prototype.checkCollision = function () {
    if (this.x - ballRadius < 0 || this.x + ballRadius > canvas.width) {
        this.xSpeed = -this.xSpeed; 
    }
    if (this.y - ballRadius < 0 || this.y + ballRadius > canvas.height) {
        this.ySpeed = -this.ySpeed;
    }
};

/* ball animation */
var ball = new Ball();

setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ball.draw();
    ball.move();
    ball.checkCollision();

    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}, 30);





