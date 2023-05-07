import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';

import {Cell} from './Cell';

const Container = styled(Cell)({
  display: 'flex',
  alignItems: 'center',
  fontSize: '12px',
});

type Props = {children: ReactNode};

export const Label: FC<Props> = ({children}) => {
  return <Container dir="ltr">{children}</Container>;
};
