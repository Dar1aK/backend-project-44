import playGame from '../index.js';
import getRandomInt from '../integer.js';

const length = 10;

const generateArray = (count, start, delta) => {
  const progression = [];
  for (let i = 0; i < count; i += 1) {
    progression.push(start + i * delta);
  }
  return progression;
};

const generateRound = () => {
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

const playProgressionGame = () => {
  playGame('What number is missing in the progression?', generateRound);
};

export default playProgressionGame;
