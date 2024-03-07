import playGame from '../index.js';
import getRandomInt from '../integer.js';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return getGcd(num2, num1 % num2);
};

const generateRound = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);

  return {
    question: `${number1} ${number2}`,
    answer: `${getGcd(number1, number2)}`,
  };
};

const playGcdGame = () => {
  playGame('Find the greatest common divisor of given numbers.', generateRound);
};

export default playGcdGame;
