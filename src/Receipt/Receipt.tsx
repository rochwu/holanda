import styled from '@emotion/styled';
import {FC} from 'react';

import {Ids} from '../store';
import {spacing} from '../styles';

import {Item} from './Item';
import {LineTotal} from './LineTotal';
import {Sum} from './Sum';
import {Tax} from './Tax';
import {CustomTips, Tips} from './Tips';
import {Total} from './Total';

const Container = styled.div({
  gridRow: '1 / 3',
  fontSize: '20px',
  display: 'grid',
  gridAutoRows: '1fr',
  gap: spacing.gap,
  padding: spacing.gap,
});

type Props = Parameters<typeof Container>[0];

export const Receipt: FC<Props> = (props) => {
  return (
    <Container {...props}>
      <Item label="thing" />
      <Sum identifier={Ids.Subtotal} />
      <Tax />
      <LineTotal />
      <Tips percent={15} />
      <Tips percent={18} />
      <Tips percent={20} />
      <CustomTips />
      <Total />
    </Container>
  );
};
