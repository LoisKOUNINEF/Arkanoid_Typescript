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
  ) {}

function startGame(view: CanvasView) {}

const view = new CanvasView('#playField');
view.initStartButton(startGame);
