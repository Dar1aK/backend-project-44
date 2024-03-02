import game from '../src/index.js';
import getRandomInt from '../src/integer.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const primeGame = (name) => {
  const getParams = () => {
    const number = getRandomInt(2, 100);

    return {
      question: `${number}`,
      answer: `${isPrime(number)}`,
    };
  };

  game(
    name,
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    getParams,
  );
};

export default primeGame;
