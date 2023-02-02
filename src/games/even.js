import starting from '../cli.js';
import { answer, checkAnswer } from '../index.js';
import { numbers } from '../math.js';

const gameEven = () => {
  const userName = starting('Answer "yes" if the number is even, otherwise answer "no"');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = numbers();
    const userAnswer = answer(randomNumber, 'string');
    const answerCorrect = randomNumber % 2 === 0 ? 'yes' : 'no';
    if (!checkAnswer(userAnswer, answerCorrect, userName, i)) break;
  }
};

export default gameEven;
