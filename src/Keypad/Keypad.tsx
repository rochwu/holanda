import styled from '@emotion/styled';
import {FC} from 'react';

import {OpType} from '../types';

import {Backspace} from './Backspace';
import {Numeric, Zero} from './Numeric';
import {Operator, Dot} from './Operator';

const gap = '2px';

const Container = styled.div({
  display: 'grid',
  backgroundColor: '#f3f3f3',
  gridRow: '3',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',
  gap,
  padding: gap,
  userSelect: 'none',
});

export const Keypad: FC = () => {
  return (
    <Container>
      <Numeric value={1} />
      <Numeric value={2} />
      <Numeric value={3} />
      <Operator op={OpType.Divide} />
      <Numeric value={4} />
      <Numeric value={5} />
      <Numeric value={6} />
      <Operator op={OpType.Multiply} />
      <Numeric value={7} />
      <Numeric value={8} />
      <Numeric value={9} />
      <Operator op={OpType.Subtract} />
      <Dot />
      <Zero />
      <Backspace />
      <Operator op={OpType.Add} />
    </Container>
  );
};
