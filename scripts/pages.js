import getContentByKey from "./getContentByKey.js";
import getContents from "./getContents.js";
import viewContents from "../view/content.js";
import viewChips from "../view/chips.js";

import ArticleComponent from "../components/article.js";
import ContentsWrapperComponent from "../components/contents.js";

const contents = getContents();

export default (container) => {
  const home = () => {
    const insertContents = () => {
      document.querySelector(".contents-list").innerHTML = viewContents({
        contents,
      });
    };
    container.innerHTML = ContentsWrapperComponent();
    insertContents();
  };

  const detail = (params) => {
    const { key } = params;
    const content = getContentByKey(contents, key);
    const { fullDescription, openGraph, seoConfig } = content;
    const { imageAlt, imageUrl, title } = openGraph;

    const insertChips = () => {
      document.querySelector(".chip-container").innerHTML = viewChips({
        tags: seoConfig.tags,
      });
    };
    container.innerHTML = ArticleComponent(
      imageUrl,
      imageAlt,
      title,
      fullDescription
    );
    insertChips();
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
