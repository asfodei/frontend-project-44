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

export const opper3 = (n, a) => {
  let result = '';
  const length = numbers(5, 10);
  const hidden = numbers(1, length - 2);
  for (let i = 0; i < length; i += 1) {
    const current = (n + (a * i));
    result += (i !== hidden) ? `${current} ` : '.. ';
  }
  return result;
};

export const opper4 = (str) => {
  const sort = str.split(' ');
  const index = sort.indexOf('..');
  const pastNumber = parseInt(sort[index - 1], 10);
  const nextNumber = parseInt(sort[index + 1], 10);
  const solve = (pastNumber + nextNumber) / 2;
  return `${solve}`;
};

export const opper5 = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};
