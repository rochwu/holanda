import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';
import {color, spacing} from '../../styles';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  top: 1,
  left: 1,
  backgroundColor: color.order,
  color: color.dark,
  borderRadius: '50%',
  width: '1em',
  lineHeight: 1,
  fontSize: spacing.label,
  fontWeight: 'bold',
});

export const Order: FC<{children: ReactNode}> = ({children}) => {
  return <Container>{children}</Container>;
};
