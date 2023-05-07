import styled from '@emotion/styled';

import {spacing} from '../../styles';
import {Cell} from '../Cell';

type Props = {
  width?: string;
};

export const Base = styled(Cell)<Props>(
  {
    overflowX: 'auto',
    paddingRight: spacing.inputPadding,
    borderRadius: spacing.borderRadius,
  },
  ({width}) => ({
    width: width ?? spacing.longInput,
  }),
);
