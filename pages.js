import getContentByKey from "./getContentByKey.js";
import getContents from "./getContents.js";
import viewContents from "./view/content.js";

export default (container) => {
  const home = () => {
    container.innerHTML = `<div class="banner-image-container">
    <img class="banner-image" src="./assets/tosstect_banner.webp" alt="배너이미지">
  </div>
  <section class="contents">
    <ul class="contents-list" data-component="contents-list" >
      ${viewContents({
        contents: getContents(),
      })}
    </ul>
  </section>`;
  };

  const detail = (params) => {
    const { key } = params;
    const contents = getContents();
    const { id } = getContentByKey(contents, key);
    console.log(id);
    container.innerHTML = `${id}`;
  };

  const notFound = () => {
    container.textContent = "Page Not Found!";
  };

  return {
    home,
    detail,
    notFound,
  };
};
