const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.querySelector('#score--1');
const current0EL = document.querySelector('.current--0');
const current1EL = document.querySelector('.current--1');
const diceEL = document.querySelector('.dice');
score0EL.textContent = 0;
score1EL.textContent = 0;
diceEL.classList.add('hidden');
let activePlayer, currentScore, scores, playing;
const switchPlayer = function () {
  document.querySelector(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0EL.classList.toggle('player-active');
  player1EL.classList.toggle('player-active');
};

const btnRoll = function () {
  if (playing) {
    dice = Math.trunc(Math.random() * 6) + 1;
    //dice.classList.remove('hidden');
    dice.classList.remove('hidden');
    dice.src = `dice${dice}.png`;
    console.log(dice);
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
};
const btnHold = function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    document.querySelector(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] > 100) {
      playing = false;
      diceEL.classList.add('hidden');
      document
        .querySelector(`player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
};
const btnNew = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0EL.textContent = 0;
  score1EL.textContent = 0;
  current0EL.textContent = 0;
  current1EL.textContent = 0;
  diceEL.classList.add('hidden');

  player0EL.classList.remove('player--winner');
  player1EL.classList.remove('player--winner');
  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
};

document.querySelector('').addEventListener('click', btnRoll);
document.querySelector('').addEventListener('click', btnHold);
document.querySelector('').addEventListener('click', btnNew);
