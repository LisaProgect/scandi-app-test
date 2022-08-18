import sizeMap from './CSS.config';

const parseSize = (size) => {
  if (typeof size === 'number') {
    return {
      size: `${size}`,
      unit: '',
    };
  }
  const trimmedSize = size.trim();

  const sizeNumber = trimmedSize.match(/\d+/g);
  const sizeUnit = trimmedSize.match(/\D/g);

  return {
    size: (sizeNumber && sizeNumber.join('')) || '',
    unit: (sizeUnit && sizeMap[sizeUnit.join('').toUpperCase()]) || '',
  };
};

export default parseSize;
