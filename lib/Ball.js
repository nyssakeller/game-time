var GamePieces = require('./GamePieces.js');

class Ball extends GamePieces {
  constructor(x, y, dx, dy, color) {
    super(x, y, color);
    this.dx = dx;
    this.dy = dy;
    this.radius = 10;
    this.color = color;
  }

  drawBall(ctx) {
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false, this.color);
    ctx.strokeStyle = 'blue';
    ctx.closePath();
    ctx.fill();
    return this;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;

    if (this.x + this.radius > 600 || this.x - this.radius < 0) {
      this.dx = -this.dx;
    } 
    if (this.y - this.radius < 0){
      this.dy = -this.dy;
    } 
  }

  paddleTouch(paddle) {
    let p0 = paddle.x - 20;
    // these other p values are for later to develop more dynamic ball movement
    // let p20 = paddle.x + 20
    // let p40 = paddle.x + 40
    // let p60 = paddle.x + 60
    // let p80 = paddle.x + 80
    let p100 = paddle.x + 120;

    if (this.y + this.radius === paddle.y) {
      console.log('paddleTouch is running');
      if (this.x > p0 && this.x < p100) {
        console.log('paddle is hit');
        this.dy = -this.dy;
      } else {
        console.log('no collision')
      }
    } 
  }
}

// we need to know which instance the ball has hit
// have it hit the array - the array has a shape
// once it's hit the array, start with the bottom most y coordinate of the entire array to see if we're hitting the array
// go through the array, once there is a hit, we plot the coorindate
//
// function that knows we've hit the arry
// what brick did we hit
// now remove the brick

// for testing the brick, console.log this.x to make sure the coordinates of the bricks



// Test
// Test
// Test
// Test
module.exports = Ball;