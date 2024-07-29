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
  const home = () => {
    const [state, setState] = useState({
      currentFilter: "전체",
      contents: contents,
    });
    container.innerHTML = ContentsWrapperComponent();
    registry.add("contents", viewContents);
    registry.add("tabs", viewTabs);

    document.querySelector(".tabs").addEventListener("click", (event) => {
      const tabValue = event.target.innerText;
      setState({ ...state, currentFilter: tabValue });
      switch (tabValue) {
        case "전체":
          setState({ currentFilter: "전체", contents: contents });
          break;
        default:
          const filteredContents = contents.filter(
            (value) => value.category == tabValue
          );
          setState({ currentFilter: tabValue, contents: filteredContents });
          break;
      }
    });
    render(state);
  };

  const detail = (params) => {
    const { key } = params;
    const articleInfo = getArticleInfo(contents, key);
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
