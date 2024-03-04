import game from '../index.js';
import getRandomInt from '../integer.js';
import getName from '../cli.js';

const isPrime = (number) => {
  for (let i = 0; i < number; i += 1) {
    if (number % i === 0 && i !== 1) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  const getParams = () => {
    const number = getRandomInt(2, 100);

    return {
      question: number,
      answer: isPrime(number) ? 'yes' : 'no',
    };
  };

  console.log('Welcome to the Brain Games!');

  const name = getName();

  game(
    name,
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    getParams,
  );
};

export default primeGame;
