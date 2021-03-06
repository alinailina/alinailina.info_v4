const calcDynamicHeight = (objectWidth) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh;
};

const handleDynamicHeight = (ref, setDynamicHeight) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

const applyScrollListener = (ref, setTranslateX) => {
  window.addEventListener("scroll", () => {
    const offsetTop = -ref.current.offsetTop;
    setTranslateX(offsetTop);
  });
};

module.exports = {
  calcDynamicHeight: calcDynamicHeight,
  handleDynamicHeight: handleDynamicHeight,
  applyScrollListener: applyScrollListener,
};
