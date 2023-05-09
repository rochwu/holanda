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
  focus: 4,
};

export const spacing = {
  gap: `${pixels.gap}px`,
  borderRadius: '8px',
  radioSize: '44px',
  inputGap: `${pixels.inputGap}px`,
  inputPadding: `${pixels.inputPadding}px`,
  longInput: `${pixels.longInput}px`,
  shortInput: `${pixels.longInput - pixels.inputGap - pixels.radioSize}px`,
  label: '12px',
  focus: `${pixels.focus}px`,
};

// nederland
// const palette = {
//   positive: '#1E4785',
//   negative: '#A91F32',
//   light: 'white',
//   dark: 'black',
//   off: gray('DD'),
//   background: gray('F3'),
// };

// no negative
const palette = {
  action: '#5E5E5E',
  light: 'white',
  dark: '#5E5E5E',
  off: gray('DD'),
  background: document
    .getElementById('theme')!
    .getAttribute('content')!
    .toString(),
  backgroundText: '#EFEFEF',
};

export const color = {
  ...palette,
  background: palette.background,
  dev: palette.light,
  disabled: {
    color: palette.dark,
    backgroundColor: palette.off,
  },
  buttons: {
    number: {
      color: palette.dark,
      backgroundColor: palette.light,
    },
    action: {
      color: palette.light,
      backgroundColor: palette.action,
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
