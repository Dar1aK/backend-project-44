import game from '../index.js';
import getRandomInt from '../integer.js';
import getName from '../cli.js';

const length = 10;

const generateArray = (count, start, delta) => {
  const progression = [];
  for (let i = 0; i < count; i += 1) {
    progression.push(start + i * delta);
  }
  return progression;
};

const progressionGame = () => {
  const getParams = () => {
    const hiddenElementPosition = getRandomInt(0, length - 1);
    const delta = getRandomInt(1, 10);
    const start = getRandomInt(0, 100);

    const progression = generateArray(length, start, delta);

    const hiddenElement = start + hiddenElementPosition * delta;

    progression[hiddenElementPosition] = '..';

    return {
      question: progression.join(' '),
      answer: `${hiddenElement}`,
    };
  };

  console.log('Welcome to the Brain Games!');

  const name = getName();

  game(name, 'What number is missing in the progression?', getParams);
};

export default progressionGame;
