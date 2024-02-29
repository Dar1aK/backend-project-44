import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const round = () => {
  const first = getRandomInt(0, 100);
  const firstAnswer = first % 2 === 0 ? 'yes' : 'no';

  console.log(`Question: ${first}`);

  const firstInput = readlineSync.question('Your answer: ');
  if (firstInput === firstAnswer) {
    console.log('Correct!');
    return true;
  }

  console.log(
    `'${firstInput}' is wrong answer ;(. Correct answer was '${firstAnswer}'.`,
  );

  return false;
};

const evenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundCount = 3;

  for (let i = 0; i < roundCount; i += 1) {
    const roundResult = round();
    if (!roundResult) {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default evenGame;
