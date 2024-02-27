import readlineSync from "readline-sync";

const getNameByCli = () => {
  const name = readlineSync.question("Your answer: ");

  console.log(`Hello, ${name}!`);
};

export default getNameByCli;
