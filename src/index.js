import readlineSync from 'readline-sync';

const round = (question, answer) => {
  console.log(`Question: ${question}`);

  const gamerAnswer = readlineSync.question('Your answer: ');
  if (gamerAnswer === answer) {
    console.log('Correct!');
    return true;
  }

  console.log(
    `'${gamerAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`,
  );

  return false;
};

const game = (name, rules, getNumber) => {
  console.log(rules);

  const roundCount = 3;

  for (let i = 0; i < roundCount; i += 1) {
    const { question, answer } = getNumber();
    const roundResult = round(question, answer);
    if (!roundResult) {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default game;
