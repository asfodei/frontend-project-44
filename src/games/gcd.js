import starting from '../cli.js';
import { answer, checkAnswer } from '../index.js';
import { numbers, opper2 } from '../math.js';

const gameGcd = () => {
  const userName = starting('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const x = numbers();
    const y = numbers();
    const exampleGcd = `${x} ${y}`;
    const answerUser = answer(exampleGcd);
    const answerCorrect = opper2(x, y);
    if (!checkAnswer(answerUser, answerCorrect, userName, i)) break;
  }
};

export default gameGcd;
