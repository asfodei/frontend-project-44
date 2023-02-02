import starting from '../cli.js';
import { answer, checkAnswer } from '../index.js';
import { numbers, opper3, opper4 } from '../math.js';

const gameProg = () => {
  const userName = starting('What number is missing in thr progression?');

  for (let i = 0; i < 3; i += 1) {
    const x = numbers();
    const y = numbers(2, 10);
    const exampleProg = opper3(x, y);
    const answerUser = answer(exampleProg, 'string');
    const answerCorrect = opper4(exampleProg);
    if (!checkAnswer(answerUser, answerCorrect, userName, i)) break;
  }
};

gameProg();
export default gameProg;
