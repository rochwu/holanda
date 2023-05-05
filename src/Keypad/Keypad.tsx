import styled from '@emotion/styled';
import {FC} from 'react';

import {OpType} from '../types';

import {Backspace} from './Backspace';
import {Number, Zero} from './Number';
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
      <Number number={1} />
      <Number number={2} />
      <Number number={3} />
      <Operator op={OpType.Divide} />
      <Number number={4} />
      <Number number={5} />
      <Number number={6} />
      <Operator op={OpType.Multiply} />
      <Number number={7} />
      <Number number={8} />
      <Number number={9} />
      <Operator op={OpType.Subtract} />
      <Dot />
      <Zero />
      <Backspace />
      <Operator op={OpType.Add} />
    </Container>
  );
};
