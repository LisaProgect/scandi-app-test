import sizeMap from './CSS.config';

export class CSS {
  static setVariable(ref, name, value) {
    if (ref.current) {
      ref.current.style.setProperty(`--${name}`, value);
    }
  }
}

export const parseSize = (size) => {
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

export default CSS;
