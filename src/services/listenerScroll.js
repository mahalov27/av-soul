const listenerScroll = (value) => {
  let isInViewPort = false;
  window.pageYOffset < value && (isInViewPort = false);
  window.pageYOffset > value && (isInViewPort = true);
  return isInViewPort;
};

export default listenerScroll;
