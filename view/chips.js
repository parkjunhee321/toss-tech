const getChipElement = (tag) => {
  const { content } = tag;
  return `<div class="chip">#${content}</div>`;
};

export default ({ tags }) => {
  const chipElement = tags.map(getChipElement).join("");
  return chipElement;
};
