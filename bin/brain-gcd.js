import starting from '../src/cli.js';
import { answer, checkAnswer } from '../src/index.js';
import { numbers, opper2 } from '../src/math.js';

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

gameGcd();
export default gameGcd;
