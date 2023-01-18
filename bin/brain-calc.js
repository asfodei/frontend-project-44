import starting from '../src/cli.js';
import { answer, checkAnswer } from '../src/text.js';
import { opper1, base, numbers } from '../src/math.js';

const gameCalc = () => {
  const userName = starting('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const signCalc = opper1(['+', '-', '*']);
    const x = numbers(2, 16);
    const y = numbers(2, 16);
    const exampleCalc = `${x} ${signCalc} ${y}`;
    const answerUser = answer(exampleCalc);

    let answerCorrect = 0;
    switch (signCalc) {
      case '+':
        answerCorrect = base(x, y, '+');
        break;

      case '-':
        answerCorrect = base(x, y, '-');
        break;

      case '*':
        answerCorrect = base(x, y, '*');
        break;

      default:
    }
    if (!checkAnswer(answerUser, answerCorrect, userName, i)) break;
  }
};

gameCalc();
export default gameCalc;
