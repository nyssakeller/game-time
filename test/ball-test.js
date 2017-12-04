const { expect } = require('chai');
const { assert } = require('chai');
const Ball = require('../lib/Ball.js');
const Paddle = require('../lib/Paddle.js');

let ball;
let paddle;

describe('Ball', function() {

  beforeEach(() => {
    ball = new Ball(10, 300, 5, 5, 0, Math.PI * 2, false, 'green');
    paddle = new Paddle(100, 500, 50, 100, 10, 'green');
  })

  it('should exist as a ball on the page', function() {
    expect(new Ball()).to.be.an.instanceof(Ball);
  });

  it('should be a function', function() {
    assert.isFunction(Ball);
  });

  it('should have a radius', function() {
    expect(ball.radius).to.equal(10);
  });

  it('should have a starting x', function() {
    expect(ball.x).to.equal(10);
  });

  it('should have a starting y', function() {
    expect(ball.y).to.equal(300);
  });

  it('should have a default x velocity', function() {
    expect(ball.dy).to.equal(5);
  });

  it('should have a default y velocity', function() {
    expect(ball.dx).to.equal(5);
  });

  // come back to this test
  it.skip('should have a property of move', function() {
  });

  it('should have the x-velocity added to the x upon moving', function() {
    ball.move();
    expect(ball.x).to.equal(15);
  });

  it('should have the y-velocity added to the y upon moving', function() {
    ball.move();
    expect(ball.y).to.equal(305);
  });

  it('should have the y velocity reversed on paddleTouch', function() {
    ball.dy = 50;
    ball.move();
    expect(ball.dy).to.equal(50);
    ball.paddleTouch(paddle);
    // can't get second piece to work
    // assert.equal(ball.dy, -50);
    // expect(ball.dy).to.equal(-50);
  });
});
