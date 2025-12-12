const getNewTitle = (pathname) => {
  const regEx = /[_/]/g;
  const val = pathname.split("/");
  if (val[val.length - 1].length < 1) {
    return "AVsoul";
  }

  const getPack = () => {
    if (
      val[val.length - 1] === "lite" ||
      val[val.length - 1] === "standart" ||
      val[val.length - 1] === "maximum"
    ) {
      return "package";
    } else {
      return "";
    }
  };
  
  const newTitle = pathname.replace(regEx, " ");

  return `AVsoul ${newTitle} ${getPack()}`
};

export default getNewTitle;
