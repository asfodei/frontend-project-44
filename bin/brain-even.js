import starting from '../src/cli.js';
import { answer, checkAnswer } from '../src/text.js';
import { numbers } from '../src/math.js';

const gameEven = () => {
  const userName = starting('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = numbers();
    const userAnswer = answer(randomNumber, 'string');
    const answerCorrect = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (!checkAnswer(userAnswer, answerCorrect, userName, i)) break;
  }
};

gameEven();
export default gameEven;
