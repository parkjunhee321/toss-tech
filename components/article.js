import articleNodeInfo from "../scripts/rendering/createArticleNode.js";

export default function Article(article) {
  const { imageUrl, imageAlt, title, data } = article;
  const result = data
    .map((value) => {
      return `<p>${articleNodeInfo(value)}</p>`;
    })
    .join("");

  return `<section class="article-container">
    <div class="article-intro">
      <img class="article-banner-image" src="${imageUrl}" alt="${
    imageAlt || "썸네일"
  }" />
      <h1 class="article-title">${title}</h1>
      <div class="chip-container">
      </div>
      </div>
      <article class="article">
      ${result}
      </article>
    </section>`;
}
