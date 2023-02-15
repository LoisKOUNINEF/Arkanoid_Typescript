import { CanvasView } from './view/CanvasView';
import { Ball } from './sprites/Ball';
import { Brick } from './sprites/Brick';
import { Paddle } from './sprites/Paddle';
import { Collision } from './Collision';

import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';

import { API_KEY } from './key.js';

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
let currentBest = localStorage.bestArkanoidScore ? JSON.parse(localStorage.bestArkanoidScore) : 0;

function submitScore() {
  let userScore = parseInt(localStorage.currentArkanoidScore);

  let userEmail = localStorage.sharcadEmail
  ? JSON.parse(localStorage.sharcadEmail)
  : prompt("Enter your shaRcade email to send your score !");

  if (userEmail) {
    localStorage.setItem("sharcadEmail", JSON.stringify(userEmail));

    const data = {
      "score_token" : {
        "hi_score" : userScore,
        "api_key" : API_KEY,
        "user_email" : userEmail
      }
    };
    fetch(`https://sharcade-api.herokuapp.com/sharcade_api`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .catch((error) => console.log(error));
  }
}

function setGameOver(view: CanvasView) {
  view.drawInfo('Game Over !');
  gameOver = false;
  submitScore();
}

function setGameWon(view: CanvasView) {
  view.drawInfo('Nice Job !');
  gameOver = false;
  submitScore();
}

async function gameLoop(
  view: CanvasView,
  bricks: Brick[],
  paddle: Paddle,
  ball: Ball,
  collision: Collision
  ) {
  view.clear();
  view.drawBricks(bricks);
  view.drawSprite(paddle);
  view.drawSprite(ball);

  ball.moveBall();

  if (
    (paddle.isMovingLeft && paddle.pos.x > 0) ||
    (paddle.isMovingRight && paddle.pos.x < view.canvas.width - paddle.width)
    ) {
    paddle.movePaddle();
  }

  collision.checkBallCollision(ball, paddle, view);
  const collidingBrick = collision.isCollidingBricks(ball, bricks);

  if (collidingBrick) {
    score += 1;
    localStorage.setItem("currentArkanoidScore", JSON.stringify(score));
    view.drawScore(score);
    if (score > currentBest) {
      localStorage.setItem("bestArkanoidScore", JSON.stringify(score));
    }
  }

  if (ball.pos.y > view.canvas.height) gameOver = true;

  if (bricks.length === 0) return setGameWon(view);

  if (gameOver) return setGameOver(view);

  requestAnimationFrame(() => gameLoop(view, bricks, paddle, ball, collision));
}

async function startGame(view: CanvasView) {
  score = 0;
  view.drawInfo('');
  view.drawScore(0);

  const collision = new Collision();

  const bricks = createBricks();

  const ball = new Ball(
    BALL_SPEED,
    BALL_SIZE,
    { x: BALL_STARTX, y: BALL_STARTY},
    BALL_IMAGE
    )

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

  await gameLoop(view, bricks, paddle, ball, collision);
}

const view = new CanvasView('#playField');

view.initStartButton(startGame);
