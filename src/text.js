import readLineSyns from 'readline-sync';

export const type = (str) => {
  console.log(str);
};

export const answer = (meaning, data) => {
  const result = readLineSyns.question(`Question: ${meaning} \nYour answer: `);
  if (data === 'string') {
    return result;
  }
  return parseInt(result, 10);
};

export const checkAnswer = (answerUser, answerCorrect, userName, attempt) => {
  if (answerUser === answerCorrect) {
    type('Correct!');
  } else {
    type(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'. /nLet's try again, ${userName}`);
    return false;
  }
  if (attempt === 2) type(`Congratulations, ${userName}!`);
  return true;
};
