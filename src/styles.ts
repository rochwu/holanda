import {CSSObject} from '@emotion/react';

const gray = (hex2: string) => {
  return `#${hex2.repeat(3)}`;
};

const pixels = {
  gap: 2,
  radioSize: 44,
  longInput: 170.5,
  inputPadding: 4,
  inputGap: 4,
};

export const spacing = {
  gap: `${pixels.gap}px`,
  borderRadius: '8px',
  radioSize: '44px',
  inputGap: `${pixels.inputGap}px`,
  inputPadding: `${pixels.inputPadding}px`,
  longInput: `${pixels.longInput}px`,
  shortInput: `${pixels.longInput - pixels.inputGap - pixels.radioSize}px`,
};

const palette = {
  positive: '#1E4785',
  negative: '#A91F32',
  light: 'white',
  dark: 'black',
};

export const color = {
  ...palette,
  background: gray('F3'),
  dev: palette.light,
  disabled: {
    color: gray('C1'),
    backgroundColor: gray('DD'),
  },
  buttons: {
    number: {
      color: palette.dark,
      backgroundColor: palette.light,
    },
    positive: {
      color: palette.light,
      backgroundColor: palette.positive,
    },
    negative: {
      color: palette.light,
      backgroundColor: palette.negative,
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
