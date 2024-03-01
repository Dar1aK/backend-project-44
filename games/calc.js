import game from '../src/index.js';
import { getRandomInt } from '../src/integer.js';

const OPERATORS = {
  '*': (n1, n2) => n1 * n2,
  '+': (n1, n2) => n1 + n2,
  '-': (n1, n2) => n1 - n2,
};

const calcGame = (name) => {
  const getNumber1 = () => getRandomInt(0, 100);
  const getNumber2 = () => getRandomInt(0, 100);

  const getOperator = () => {
    const arrOperators = Object.keys(OPERATORS);
    return arrOperators[Math.floor(Math.random() * arrOperators.length)];
  };

  const getParams = () => {
    const number1 = getNumber1();
    const number2 = getNumber2();
    const operator = getOperator();

    return {
      question: `${number1} ${operator} ${number2}`,
      answer: `${OPERATORS[operator](number1, number2)}`,
    };
  };

  game(name, 'What is the result of the expression?', getParams);
};

export default calcGame;
