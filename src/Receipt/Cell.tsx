import styled from '@emotion/styled';

type Props = {};

export const Cell = styled.div<Props>({
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'center',
  boxSizing: 'border-box',
});
