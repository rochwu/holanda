import {CSSObject} from '@emotion/react';

const gray = (hex2: string) => {
  return `#${hex2.repeat(3)}`;
};

const pixels = {
  gap: 2,
  longInput: 170,
  borderRadius: 8,
  inputPadding: 8,
  focus: 4,
  minInput: 44,
};

/**
 * things with px
 * TODO: Maybe move to a more dynamic thingo
 */
export const spacing = {
  gap: `${pixels.gap}px`,
  borderRadius: `${pixels.borderRadius}px`,
  radioSize: `${pixels.minInput}px`,
  inputPadding: `${pixels.inputPadding}px`,
  longInput: `${pixels.longInput}px`,
  shortInput: `${pixels.longInput - pixels.inputPadding - pixels.minInput}px`,
  label: '12px', // At least 12 for font
  focus: `${pixels.focus}px`,
  minInputHeight: `${pixels.minInput}px`,
};

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
  final: '#50C878',
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
