import styled from '@emotion/styled';

import {spacing} from '../../styles';
import {Cell} from '../Cell';

export const Base = styled(Cell)({
  overflowX: 'scroll',
  width: '10ch',
  paddingRight: spacing.inputPadding,
  borderRadius: spacing.borderRadius,
});
