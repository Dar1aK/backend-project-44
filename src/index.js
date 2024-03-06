import readlineSync from 'readline-sync';

const roundCount = 3;

const runRound = (question, answer) => {
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

const playGame = (rules, getAnswerAndQuestion) => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(rules);

  for (let i = 0; i < roundCount; i += 1) {
    const { question, answer } = getAnswerAndQuestion();
    const roundResult = runRound(question, answer);
    if (!roundResult) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
