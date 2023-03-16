export const nextIndex = (arrayLenght, index) => {
  return arrayLenght - 1 > index ? index + 1 : 0;
};

export const prevIndex = (arrayLenght, index) => {
  return index > 0 ? index - 1 : arrayLenght - 1;
};
