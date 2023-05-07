import styled from '@emotion/styled';
import {FC} from 'react';

import {spacing} from '../styles';

import {Cell} from './Cell';

const Container = styled(Cell)({
  width: '5ch',
  paddingRight: spacing.inputPadding,
  paddingLeft: spacing.inputPadding,
  borderRadius: spacing.borderRadius,
});

type Props = {
  value: number;
};

export const Percent: FC<Props> = ({value}) => {
  return <Container>{value}</Container>;
};
