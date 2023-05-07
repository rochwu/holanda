import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';

import {Cell} from './Cell';

const Container = styled(Cell)({
  display: 'flex',
  alignItems: 'center',
  fontSize: '10px',
  textTransform: 'uppercase',
  fontWeight: 'bold',
});

type Props = {children: ReactNode};

export const Label: FC<Props> = ({children}) => {
  return <Container dir="ltr">{children}</Container>;
};
