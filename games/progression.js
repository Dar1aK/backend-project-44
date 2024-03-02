import game from '../src/index.js';
import { getRandomInt } from '../src/integer.js';

const generateArray = (count, start, delta, hiddenElementPosition) => {
  const array = [];
  let hiddenElement;
  for (let i = 0; i < count; i += 1) {
    if (i !== hiddenElementPosition) {
      array.push(start + i * delta);
    } else {
      array.push('..');
      hiddenElement = start + i * delta;
    }
  }
  return { array, hiddenElement };
};

const progressionGame = (name) => {
  const length = 10;

  const getParams = () => {
    const hiddenElementPosition = Math.floor(Math.random() * length);
    const delta = getRandomInt(1, 10);
    const start = getRandomInt(0, 100);

    const { array, hiddenElement } = generateArray(
      length,
      start,
      delta,
      hiddenElementPosition,
    );

    return {
      question: array.join(' '),
      answer: `${hiddenElement}`,
    };
  };

  game(name, 'What number is missing in the progression?', getParams);
};

export default progressionGame;
