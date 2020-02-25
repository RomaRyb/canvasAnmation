var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var ballRadius = 4;

/* Ball constructor */
var Ball = function () {
    this.x = 100;
    this.y = 100;

    this.xSpeed = -2;
    this.ySpeed = 3;
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
    circle(this.x, this.y, ballRadius, true);
};

/* ball move*/
Ball.prototype.move = function () {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};

/* ball reflect */

Ball.prototype.checkCollision = function () {
    if (this.x - ballRadius < 0 || this.x + ballRadius > 200) {
        this.xSpeed = -this.xSpeed; 
    }
    if (this.y - ballRadius < 0 || this.y + ballRadius > 200) {
        this.ySpeed = -this.ySpeed;
    }
};

/* ball animation */
var ball = new Ball();

setInterval(function () {
    ctx.clearRect(0, 0, 200, 200);

    ball.draw();
    ball.move();
    ball.checkCollision();

    ctx.strokeRect(0, 0, 200, 200);
}, 30);





