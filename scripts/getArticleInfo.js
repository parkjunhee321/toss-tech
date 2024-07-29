const findContent = ({ value }) => {
  const { contents, key } = value;
  const resultContent = contents.find((value) => value.key === key);
  return resultContent;
};

export default (contents, key) => {
  return findContent({ value: { contents, key } });
};
