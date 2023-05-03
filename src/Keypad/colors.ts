import {CSSObject} from '@emotion/react';

type Props = Pick<CSSObject, 'backgroundColor' | 'color'>;

export const colors = ({backgroundColor, color}: Props): CSSObject => {
  return {
    color,
    backgroundColor,
    ':active:not(:disabled)': {
      color: backgroundColor,
      backgroundColor: color,
    },
    ':hover:not(:disabled)': {
      filter: 'brightness(125%)',
    },
  };
};
