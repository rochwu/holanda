import styled from '@emotion/styled';

import {Cell} from '../Cell';

export const Base = styled(Cell)<{selected: boolean}>(
  {
    width: '10ch',
    cursor: 'cell',
  },
  ({selected}) => {
    if (selected) {
      return {border: '2px solid blue'};
    }

    return {
      border: '2px solid black',
    };
  },
);
