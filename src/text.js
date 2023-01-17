import readLineSyns from 'readline-sync';

export const answer = (meaning, data) => {
  const result = readLineSyns.question(`Question: ${meaning} /nYour answer: `);
  if (data === 'string') {
    return result;
  }
};

export const checkAnswer = (answerUser, answerCorrect, name, attempt) => {
  if (answerUser === answerCorrect) {
    type('Correct!');
  } else {
    type(` '${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'. /nLet's try again, ${name}`);
    return false;
  }
  if (attempt === 3) {
    type(`Congratulations, ${name}!`);
    return true;
  }
};
