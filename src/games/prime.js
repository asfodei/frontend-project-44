import starting from '../cli.js';
import { answer, checkAnswer } from '../index.js';
import { numbers } from '../math.js';

const gamePrime = () => {
  const userName = starting('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const x = numbers(2, 1000);
    const examplePrime = `${x}`;
    const answerUser = answer(examplePrime, 'string');

    if (!checkAnswer(answerUser, userName, i));
  }
};

gamePrime();
export default gamePrime;
