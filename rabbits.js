document.addEventListener("DOMContentLoaded", function() {
    var balls = [];
    var numberOfBalls = 20;
    var gravity = 0.4; // Increased gravity
    var bounceFactor = 0.9; // Slightly reduced bounce factor

    function Ball() {
        var ball = create();
        this.element = ball;
        this.dx = Math.random() * 4 + 1; // Random speed between 1 and 5
        this.dy = -(Math.random() * 5 + 10); // Reduced initial upward speed
    }

    Ball.prototype.updatePosition = function() {
        var x = this.element.x;
        var y = this.element.y;

        x += this.dx;
        y += this.dy;

        // Apply gravity
        this.dy += gravity;

        // Bounce off the floor
        if (y >= window.innerHeight - 50) {
            y = window.innerHeight - 50;
            this.dy *= -bounceFactor; // Reverse direction and reduce speed due to bounce
        }

        // Wrap around the screen horizontally
        if (x <= 0 || x >= window.innerWidth - 50) {
            this.dx = -this.dx;

            // Flip the image horizontally when changing direction
            if (this.dx < 0) {
                this.element.img.style.transform = 'scaleX(-1)';
            } else {
                this.element.img.style.transform = 'scaleX(1)';
            }
        }

        move(this.element, this.dx, this.dy);

        this.element.x = x;
        this.element.y = y;
    }

    for (var i = 0; i < numberOfBalls; i++) {
        balls.push(new Ball());
    }

    function updateAllPositions() {
        balls.forEach(function(ball) {
            ball.updatePosition();
        });
    }

    setInterval(updateAllPositions, 20);
});
