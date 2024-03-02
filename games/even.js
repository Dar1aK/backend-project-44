import game from '../src/index.js';
import { getRandomInt } from '../src/integer.js';

const evenGame = (name) => {
  const getParams = () => {
    const number = getRandomInt(0, 100);

    return {
      question: number,
      answer: number % 2 === 0 ? 'yes' : 'no',
    };
  };

  game(
    name,
    'Answer "yes" if the number is even, otherwise answer "no".',
    getParams,
  );
};

export default evenGame;
