import createRouter from "./router.js";
import createPages from "./pages.js";
import getContents from "./getContents.js";
import renderNav from "./view/renderNav.js";
import viewContent from "./view/content.js";

import registry from "./registry.js";

const contents = getContents();

const state = {
  contents: contents,
};

renderNav();
const main = document.querySelector(".main");

// requestAnimationFrame
window.requestAnimationFrame(() => {
  const newMain = registry.renderRoot(main, state);
  main.replaceWith(newMain);
});

const pages = createPages(main);

const router = createRouter();

router
  .addRoute("/", pages.home)
  .addRoute("/article/:key", pages.detail)
  .setNotFound(pages.notFound)
  .start();

const NAV_BTN_SELECTOR = "button[data-navigate]";

document.body.addEventListener("click", (e) => {
  const { target } = e;
  if (target.matches(NAV_BTN_SELECTOR)) {
    const { navigate } = target.dataset;
    router.navigate(navigate);
  }
});
