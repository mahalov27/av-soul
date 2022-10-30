const listenerScroll = (value) => {
    let a = false;
    window.pageYOffset < value && (a = false);
      window.pageYOffset > value && (a = true);
      return a
};

export default listenerScroll;