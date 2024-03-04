import getName from '../cli.js';
import game from '../index.js';
import getRandomInt from '../integer.js';

const evenGame = () => {
  const getParams = () => {
    const number = getRandomInt(0, 100);

    return {
      question: number,
      answer: number % 2 === 0 ? 'yes' : 'no',
    };
  };

  console.log('Welcome to the Brain Games!');

  const name = getName();

  game(
    name,
    'Answer "yes" if the number is even, otherwise answer "no".',
    getParams,
  );
};

export default evenGame;
