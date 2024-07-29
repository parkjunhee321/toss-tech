const types = {
  paragraph: "paragraph",
  heading1: "heading_1",
  heading2: "heading_2",
  heading3: "heading_3",
  heading4: "heading_4",
  image: "image",
  callout: "callout",
  code: "code",
};

const createParagraphElement = (annotations, text) => {
  return annotations.bold
    ? `<span class="paragraph-bold">${text}</span>`
    : `<span>${text}</span>`;
};

const createImageElement = (altText, fileUrl) => {
  const imageTag = `<img width="100%" height="100%" style="border-radius: 16px" src="${fileUrl}" alt="${
    altText || ""
  }" />`;
  return altText
    ? `<div>${imageTag}<span class="image-description">${altText}</span></div>`
    : imageTag;
};

const createCalloutElement = (annotations, text) => {
  return annotations.bold
    ? `<p class="paragraph-bold">${text}</p>`
    : `<p>${text}</p>`;
};

const createCodeElement = (codeArticle) => {
  const indexElement = (index) => `<span>${index + 1}</span>`;
  const codeElement = (code, color) =>
    `<p class="code-text" style="color: ${color}">${code}</p>`;

  return codeArticle
    .map((value) => {
      return value
        .map((code, index) => {
          const indexLine = indexElement(index);
          const codeLine = codeElement(code);
          return `<div class="code-line">${indexLine}${codeLine}</div>`;
        })
        .join("");
    })
    .join("");
};

const elementWrapper = (tag, elements) => `<${tag}>${elements}</${tag}>`;

const articleNodeInfo = (rawData) => {
  const { type } = rawData;

  switch (type) {
    case types.paragraph:
      return elementWrapper(
        "p",
        rawData.paragraph.rich_text
          .map((value) =>
            createParagraphElement(value.annotations, value.plain_text)
          )
          .join("")
      );
    case types.heading1:
      return elementWrapper(
        "h1",
        rawData.heading_1.rich_text.map((value) => value.plain_text).join("")
      );
    case types.heading2:
      return elementWrapper(
        "h2",
        rawData.heading_2.rich_text.map((value) => value.plain_text).join("")
      );
    case types.heading3:
      return elementWrapper(
        "h3",
        rawData.heading_3.rich_text.map((value) => value.plain_text).join("")
      );
    case types.heading4:
      return elementWrapper(
        "h4",
        rawData.heading_4.rich_text.map((value) => value.plain_text).join("")
      );
    case types.image:
      return createImageElement("", rawData.image.file.url);
    case types.callout:
      return elementWrapper(
        "aside",
        rawData.callout.rich_text
          .map((value) =>
            createCalloutElement(value.annotations, value.plain_text)
          )
          .join("")
      );
    case types.code:
      const codeArticle = rawData.code.rich_text.map((value) =>
        value.plain_text.split("\n")
      );
      return elementWrapper("div", createCodeElement(codeArticle));
    default:
      return "";
  }
};

export default articleNodeInfo;
