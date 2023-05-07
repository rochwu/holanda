import {CSSObject} from '@emotion/react';

const gray = (hex2: string) => {
  return `#${hex2.repeat(3)}`;
};

export const spacing = {
  gap: '2px',
  borderRadius: '8px',
};

const positive = '#1E4785';
const negative = '#A91F32';

export const color = {
  positive,
  negative,
  disabled: {
    color: gray('C1'),
    backgroundColor: gray('DD'),
  },
  buttons: {
    number: {
      color: 'black',
      backgroundColor: 'white',
    },
    positive: {
      color: 'white',
      backgroundColor: positive,
    },
    negative: {
      color: 'white',
      backgroundColor: negative,
    },
  },
};

export const style: Record<string, CSSObject> = {
  button: {
    fontSize: '24px',
    borderRadius: spacing.borderRadius,
    cursor: 'pointer',
  },
  disabled: {
    ...color.disabled,
    cursor: 'not-allowed',
  },
};

export const styles = {
  spacing,
  color,
  style,
};
