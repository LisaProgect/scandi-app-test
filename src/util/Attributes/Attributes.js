const getFirstAttributes = (attributes) => {
  if (attributes.length === 0) {
    return {};
  }
  return attributes.reduce((acc, { name, items }) => {
    const [firstItem] = items;
    return { ...acc, [name]: firstItem.value };
  }, {});
};

export default getFirstAttributes;
