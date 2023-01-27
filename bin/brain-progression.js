import starting from '../src/cli.js';
import { answer, checkAnswer } from '../src/index.js';
import { numbers } from '../src/math.js';

const gameProg = () => {
  const userName = starting('What number is missing in thr progression?');

  for (let i = 0; i < 3; i += 1) {
    const x = numbers();
    const y = numbers(2, 10);
    const answerUser = answer();
    const answerCorrect = ();
    if (!checkAnswer(answerUser,answerCorrect, userName, i)) break;
  }
};

gameProg();
export default gameProg;
