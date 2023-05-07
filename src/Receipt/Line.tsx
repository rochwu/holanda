import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';

import {Field} from './Field';
import {Label} from './Label';

type Props = {
  label?: string;
  children?: ReactNode; // TODO: Not optional
};

const Container = styled.div({
  display: 'flex',
  gap: '4px',
  justifyContent: 'end',
});

export const Line: FC<Props> = ({label, children}) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      {children ?? <Field />}
    </Container>
  );
};
