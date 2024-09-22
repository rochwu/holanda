import styled from '@emotion/styled';

import {color} from '../../styles';

export const Heading = styled.div(
  color.buttons.action,
  {
    position: 'absolute',
    top: 0,
    padding: '4px 16px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  ({theme}) => {
    if (theme.lefty) {
      return {
        right: 0,
      };
    }

    return {
      left: 0,
    };
  },
);
