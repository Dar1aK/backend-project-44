import game from '../index.js';
import getRandomInt from '../integer.js';
import getName from '../cli.js';

const getAnswer = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }

  return getAnswer(num2, num1 % num2);
};

const gcdGame = () => {
  const getParams = () => {
    const number1 = getRandomInt(0, 100);
    const number2 = getRandomInt(0, 100);

    return {
      question: `${number1} ${number2}`,
      answer: `${getAnswer(number1, number2)}`,
    };
  };

  console.log('Welcome to the Brain Games!');

  const name = getName();

  game(name, 'Find the greatest common divisor of given numbers.', getParams);
};

export default gcdGame;
