import styled from '@emotion/styled';
import {FC} from 'react';

import {attributes} from '../attributes';
import {spacing} from '../styles';
import {OpType} from '../types';

import {Backspace} from './Backspace';
import {Flip} from './Flip';
import {Numeric, Zero} from './Numeric';
import {Operator, Dot} from './Operator';

const Keys = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(4, 1fr)',
  gap: spacing.gap,
  padding: spacing.gap,
  width: '100%',
});

const Container = styled.div({
  display: 'flex',
  gridRow: '3',
});

export const Keypad: FC = () => {
  return (
    <Container>
      <Flip />
      <Keys {...attributes.text}>
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
      </Keys>
    </Container>
  );
};
