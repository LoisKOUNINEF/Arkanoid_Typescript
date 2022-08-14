import { CanvasView } from './view/CanvasView';
import { Ball } from './sprites/Ball';
import { Brick } from './sprites/Brick';
import { Paddle } from './sprites/Paddle';

import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';

import {
  PADDLE_SPEED,
  PADDLE_STARTX,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  BALL_SPEED,
  BALL_SIZE,
  BALL_STARTX,
  BALL_STARTY
} from './setup';

import { createBricks } from './helpers';

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView) {
  view.drawInfo('Game Over !');
}

function setGameWon(view: CanvasView) {
  view.drawInfo('Nice Job !');
}

function gameLoop(
  view: CanvasView,
  bricks: Brick[],
  paddle: Paddle,
  ball: Ball
  ) {
  view.clear();
  view.drawBricks(bricks);
  view.drawSprite(paddle);

  if (
    (paddle.isMovingLeft && paddle.pos.x > 0) ||
    (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)
    ) {
    paddle.movePaddle();
  }

  requestAnimationFrame(() => gameLoop (view, bricks, paddle));
}

function startGame(view: CanvasView) {
  score = 0;
  view.drawInfo('');
  view.drawScore(0);

  const bricks = createBricks();

  const paddle = new Paddle(
    PADDLE_SPEED,
    PADDLE_WIDTH,
    PADDLE_HEIGHT,
    {
      x: PADDLE_STARTX,
      y: view.canvas.height - PADDLE_HEIGHT - 5
    },
    PADDLE_IMAGE
    )

  gameLoop(view, bricks, paddle);
}

const view = new CanvasView('#playField');
view.initStartButton(startGame);
