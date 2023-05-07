import styled from '@emotion/styled';

import {color, spacing} from '../../styles';
import {Input} from '../Input';

export const Component = styled(Input)<{selected: boolean}>(
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
