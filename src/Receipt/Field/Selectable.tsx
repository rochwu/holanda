import styled from '@emotion/styled';

import {color, spacing} from '../../styles';

import {Base} from './Base';

export const Selectable = styled(Base)<{selected: boolean}>(
  {
    backgroundColor: color.buttons.number.backgroundColor,
  },
  ({selected}) => {
    if (selected) {
      return {
        color: color.positive,
        boxShadow: `0 0 0 ${spacing.gap} ${color.positive}`,
        zIndex: 1,
      };
    }

    return {
      color: color.buttons.number.color,
    };
  },
);
