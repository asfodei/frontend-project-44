export const numbers = (min = 1, max = 100) => {
  const minimul= Math.ceil(min);
  const maximum= Math.floor(max);
  const randomNumber= Math.floor(Math.random() * (maximum - minimul + 1)) + minimul; 
  return randomNumber;
};

export const gameEven = ()
