const getFirstImage = (gallery) => {
  if (gallery.length === 0) {
    return '';
  }
  const [firstImage] = gallery;
  return firstImage;
};

export default getFirstImage;
