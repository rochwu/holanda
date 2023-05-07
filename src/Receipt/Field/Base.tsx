import styled from '@emotion/styled';

import {spacing} from '../../styles';
import {Cell} from '../Cell';

export const Base = styled(Cell)({
  width: '10ch',
  paddingRight: '8px',
  borderRadius: spacing.borderRadius,
});
