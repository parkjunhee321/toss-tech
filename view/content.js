const getContentElement = (content) => {
  const { title, subtitle, createdTime, editor, thumbnailConfig, key } =
    content;

  return `
<li>
  <a data-navigation href="/article/${key}" class="content">
    <div class="summary">
      <span class="title">${title}</span>
      <span class="description">${subtitle}</span>
      <span class="date">${createdTime} · ${editor.name}</span>
    </div>
    <div class="thumbnail-cover">
      <img class="thumbnail" src="${thumbnailConfig.imageUrl}" />
    </div>
  </a>
</li>`;
};

export default (targetElement, { contents }) => {
  const newContentList = targetElement.cloneNode(true);
  const contentsElements = contents.map(getContentElement).join("");
  newContentList.innerHTML = contentsElements;
  return newContentList;
};
