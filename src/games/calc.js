import starting from '../cli.js';
import { answer, checkAnswer } from '../index.js';
import { opper1, base, numbers } from '../math.js';

const gameCalc = () => {
  const userName = starting('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const signCalc = opper1(['+', '-', '*']);
    const x = numbers(2, 15);
    const y = numbers(2, 10);
    const exampleCalc = `${x} ${signCalc} ${y}`;
    const answerUser = answer(exampleCalc);
    const answerCorrect = base(x, y, signCalc);
    if (!checkAnswer(answerUser, answerCorrect, userName, i)) break;
  }
};

export default gameCalc;
