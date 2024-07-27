import applyDiff from "../applyDiff.js";
import registry from "./registry.js";

const render = (state) => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector(".main");
    const newMain = registry.renderRoot(main, state);
    applyDiff(document.body, main, newMain);
  });
};

export default (state) => {
  render(state);
};
