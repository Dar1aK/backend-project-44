import playGame from '../index.js';
import getRandomInt from '../integer.js';

const OPERATORS = {
  '*': (n1, n2) => n1 * n2,
  '+': (n1, n2) => n1 + n2,
  '-': (n1, n2) => n1 - n2,
};

const getRandomOperator = () => {
  const arrOperators = Object.keys(OPERATORS);
  return arrOperators[getRandomInt(0, arrOperators.length - 1)];
};

const generateRound = () => {
  const number1 = getRandomInt(0, 100);
  const number2 = getRandomInt(0, 100);
  const operator = getRandomOperator();

  return {
    question: `${number1} ${operator} ${number2}`,
    answer: `${OPERATORS[operator](number1, number2)}`,
  };
};

const playCalcGame = () => {
  playGame('What is the result of the expression?', generateRound);
};

export default playCalcGame;
