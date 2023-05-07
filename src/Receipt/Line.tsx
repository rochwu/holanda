import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';

import {Field} from './Field';
import {Label} from './Label';

const Container = styled.div({
  display: 'flex',
  gap: '4px',
  justifyContent: 'end',
});

type Props = {
  label: string;
  children: ReactNode;
} & Parameters<typeof Container>[0];

export const Line: FC<Props> = ({label, children, ...elementProps}) => {
  return (
    <Container {...elementProps}>
      {label && <Label>{label}</Label>}
      {children ?? <Field />}
    </Container>
  );
};
