export const numbers = (min = 1, max = 100) => {
  const mini = Math.ceil(min);
  const maxi = Math.floor(max);
  const randomNumber = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
  return randomNumber;
};

export const base = (x, y, operator) => {
  let result = 0;
  if (operator === '+') result = x + y;
  if (operator === '-') result = x - y;
  if (operator === '*') result = x * y;
  return result;
};

export const opper1 = (array) => {
  const ind = Math.floor(Math.random() * array.length);
  const operator = array[ind];
  return operator;
};

export const opper2 = (a, b) => {
  let x = a;
  let y = b;
  while (x !== y) {
    if (x > y) {
      x -= y;
    } else {
      y -= x;
    }
  }
  return x;
};
