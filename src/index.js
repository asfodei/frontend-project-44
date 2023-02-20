import readLineSyns from 'readline-sync';

export const answer = (meaning, data) => {
  const result = readLineSyns.question(`Question: ${meaning} \nYour answer: `);
  if (data === 'string') {
    return result;
  }
  return parseInt(result, 10);
};

export const checkAnswer = (answerUser, answerCorrect, userName, attempt) => {
  if (answerUser === answerCorrect) {
    console.log('Correct!');
  } else {
    console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${answerCorrect}'. \nLet's try again, ${userName}!`);
    return false;
  }
  if (attempt === 2) console.log(`Congratulations, ${userName}!`);
  return true;
};
