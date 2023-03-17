const getRandomListItems = (currentList) => {
  let randomList = [];
  let checkedId = [];
  let count = 0;
  while (count < 30) {
    let index = Math.floor(Math.random() * (currentList.length - 1));

    if (!checkedId.includes(currentList[index].id)) {
      checkedId = [...checkedId, currentList[index].id];
      randomList = [...randomList, currentList[index]];
    }
    count++;
  }

  return randomList;
};

export default getRandomListItems;
