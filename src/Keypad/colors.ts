import {CSSObject} from '@emotion/react';

type Props = Pick<CSSObject, 'backgroundColor' | 'color'>;

export const colors = ({backgroundColor, color}: Props): CSSObject => {
  return {
    color,
    backgroundColor,
    ':active': {
      color: backgroundColor,
      backgroundColor: color,
    },
  };
};
