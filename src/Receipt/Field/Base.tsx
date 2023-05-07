import styled from '@emotion/styled';

import {spacing} from '../../styles';
import {Cell} from '../Cell';

import {Type} from './types';

type Props = {
  type?: Type;
};

export const Base = styled(Cell)<Props>(
  {
    overflowX: 'scroll',
    paddingRight: spacing.inputPadding,
    borderRadius: spacing.borderRadius,
  },
  ({type}) => ({
    width: type === Type.Percent ? '6ch' : '12ch',
  }),
);
