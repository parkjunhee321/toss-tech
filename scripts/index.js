import createRouter from "./router.js";
import createPages from "./pages.js";
import renderNav from "./view/renderNav.js";

const main = document.querySelector(".main");

const pages = createPages(main);
const router = createRouter();

router
  .addRoute("/", pages.home)
  .addRoute("/article/:key", pages.detail)
  .setNotFound(pages.notFound)
  .start();

renderNav();
