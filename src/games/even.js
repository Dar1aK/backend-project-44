import playGame from '../index.js';
import getRandomInt from '../integer.js';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomInt(0, 100);

  return {
    question: number,
    answer: isEven(number) ? 'yes' : 'no',
  };
};

const playEvenGame = () => {
  playGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    generateRound,
  );
};

export default playEvenGame;
