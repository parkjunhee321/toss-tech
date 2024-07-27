export default (targetElement, { currentFilter }) => {
  const newCounter = targetElement.cloneNode(true);
  Array.from(newCounter.querySelectorAll(".tab")).forEach((a) => {
    if (a.textContent === currentFilter) {
      a.classList.add(["current"]);
    } else {
      a.classList.remove(["current"]);
    }
  });
  return newCounter;
};
