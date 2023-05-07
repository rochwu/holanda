import styled from '@emotion/styled';
import {FC} from 'react';

import {spacing} from '../styles';

import {Item} from './Item';
import {Line} from './Line';
import {Sum} from './Sum';
import {Tips} from './Tips';

const Container = styled.div({
  gridRow: '1 / 3',
  fontSize: '20px',
  display: 'grid',
  gap: spacing.gap,
  padding: spacing.gap,
});

export const Receipt: FC = () => {
  return (
    <Container>
      <Item label="thing" />
      <Sum identifier="subtotal" />
      <Line label="tax" />
      <Line label="0 tips" />
      <Tips percent={15} />
      <Tips percent={18} />
      <Tips percent={20} />
      <Line label="custom tips" />
      <Sum identifier="total" />
    </Container>
  );
};
