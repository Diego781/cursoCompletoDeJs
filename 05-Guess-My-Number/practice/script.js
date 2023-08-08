'use strict';

let num = document.querySelector('.number');
let score = document.querySelector('.score');
let msg = document.querySelector('.message');
score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const btnChecking = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (guess === secretNumber) {
    displayMessage(`The number is correct`);
    num.textContent = secretNumber;
    document.body.style.backgroundColor = 'green';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else {
    displayMessage(
      guess > secretNumber
        ? `Number is too high,try again!`
        : `Number is too low,try again! `
    );
    score--;
    document.querySelector('.score').textContent = score;
  }
};
const btnAgain = function () {
  msg.textContent = `Start guessing...`;
  num.textContent = '?';
  document.body.style.background = '#222';
  score = 20;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  highscore = 0;
};
document.querySelector('.check').addEventListener('click', btnChecking);
document.querySelector('.again').addEventListener('click', btnAgain);
/*

  if (score2 > highcore) {
    highcore += score2;
  }
}

check.addEventListener('click', checking())
*/
