import game from '../src/index.js';
import getRandomInt from '../src/integer.js';

const OPERATORS = {
  '*': (n1, n2) => n1 * n2,
  '+': (n1, n2) => n1 + n2,
  '-': (n1, n2) => n1 - n2,
};

const getRandomOperator = () => {
  const arrOperators = Object.keys(OPERATORS);
  return arrOperators[Math.floor(Math.random() * arrOperators.length)];
};

const calcGame = (name) => {
  const getParams = () => {
    const number1 = getRandomInt(0, 100);
    const number2 = getRandomInt(0, 100);
    const operator = getRandomOperator();

    return {
      question: `${number1} ${operator} ${number2}`,
      answer: `${OPERATORS[operator](number1, number2)}`,
    };
  };

  game(name, 'What is the result of the expression?', getParams);
};

export default calcGame;
