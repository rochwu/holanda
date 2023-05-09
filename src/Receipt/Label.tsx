import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';

import {color, spacing} from '../styles';

import {Cell} from './Cell';

const Container = styled(Cell)({
  display: 'flex',
  alignItems: 'center',
  fontSize: spacing.label,
  textTransform: 'uppercase',
  fontWeight: 'bold',
  color: color.backgroundText,
});

type Props = {children: ReactNode};

export const Label: FC<Props> = ({children}) => {
  return <Container dir="ltr">{children}</Container>;
};
