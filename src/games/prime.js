import starting from '../cli.js';
import { answer, checkAnswer } from '../index.js';
import { numbers, opper5 } from '../math.js';

const gamePrime = () => {
  const userName = starting('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const x = numbers();
    const answerUser = answer(x, 'string');
    const answerCorrect = opper5(x);
    if (!checkAnswer(answerUser, answerCorrect, userName, i)) break;
  }
};

export default gamePrime;
