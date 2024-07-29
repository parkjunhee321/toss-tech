import getContents from "./getContents.js";
import viewContents from "../view/content.js";
import viewChips from "../view/chips.js";
import viewTabs from "../view/menu.js";
import getArticleDetailData from "./getArticleDetailData.js";

import ArticleComponent from "../components/article.js";
import ContentsWrapperComponent from "../components/contents.js";

import render from "./rendering/render.js";
import registry from "./rendering/registry.js";
import useState from "./state/index.js";
import getArticleInfo from "./getArticleInfo.js";

const contents = getContents();

export default (container) => {
  const TABS = {
    ALL: "전체",
  };

  const home = () => {
    const [state, setState] = useState({
      currentFilter: TABS.ALL,
      contents: contents,
    });
    container.innerHTML = ContentsWrapperComponent();
    registry.add("contents", viewContents);
    registry.add("tabs", viewTabs);

    const handleTabClick = (event) => {
      const tabValue = event.target.innerText;
      let updatedContents = contents;

      if (tabValue !== TABS.ALL) {
        updatedContents = contents.filter(
          (value) => value.category === tabValue
        );
      }

      setState({
        currentFilter: tabValue,
        contents: updatedContents,
      });

      render(state);
    };

    document.querySelector(".tabs").addEventListener("click", handleTabClick);
    render(state);
  };

  const detail = (params) => {
    const { key } = params;
    const articleInfo = getArticleInfo(contents, key);
    if (!articleInfo) {
      notFound();
      return;
    }

    const articleDetailData = getArticleDetailData();
    const { openGraph, seoConfig } = articleInfo;
    const { imageAlt, imageUrl } = openGraph;

    const insertChips = () => {
      document.querySelector(".chip-container").innerHTML = viewChips({
        tags: seoConfig.tags,
      });
    };

    container.innerHTML = ArticleComponent({
      ...articleDetailData,
      imageAlt,
      imageUrl,
    });
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
