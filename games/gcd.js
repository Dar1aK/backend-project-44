import game from '../src/index.js';
import { getRandomInt } from '../src/integer.js';

const gcdGame = (name) => {
  const getNumber1 = () => getRandomInt(0, 100);
  const getNumber2 = () => getRandomInt(0, 100);

  const getParams = () => {
    const number1 = getNumber1();
    const number2 = getNumber2();
    const getAnswer = (num1, num2) => {
      let min = 0;
      let max = 0;
      if (num1 === num2) {
        return num1;
      }
      if (num1 < num2) {
        min = num1;
        max = num2;
      } else {
        min = num2;
        max = num1;
      }

      for (let i = min; i >= 0; i -= 1) {
        if (max % i === 0 && min % i === 0) {
          return i;
        }
      }

      return 0;
    };

    return {
      question: `${number1} ${number2}`,
      answer: `${getAnswer(number1, number2)}`,
    };
  };

  game(name, 'Find the greatest common divisor of given numbers.', getParams);
};

export default gcdGame;
