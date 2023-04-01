export const nextIndex = (arrayLenght, index) => {
  return arrayLenght - 1 > index ? index + 1 : 0;
};

export const prevIndex = (arrayLenght, index) => {
  return index > 0 ? index - 1 : arrayLenght - 1;
};

export const getNewIndex = (arrayLenght, currentIndex, step) => {
  if(step > 0){
    if(arrayLenght - step > currentIndex){
      return currentIndex + step;
    }else{
      return 0;
    }
  }else{
    if(currentIndex > 0){
      return currentIndex + step;
    }else{
      return arrayLenght - 1;
    }
  }
}
