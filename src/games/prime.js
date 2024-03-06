import playGame from '../index.js';
import getRandomInt from '../integer.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const squareRoot = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= squareRoot; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const number = getRandomInt(0, 100);

  return {
    question: number,
    answer: isPrime(number) ? 'yes' : 'no',
  };
};

const playPrimeGame = () => {
  playGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateRound,
  );
};

export default playPrimeGame;
