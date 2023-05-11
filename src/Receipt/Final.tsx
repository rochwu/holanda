import styled from '@emotion/styled';
import {FC} from 'react';

import {precision} from '../precision';
import {color} from '../styles';

import {Cell} from './Cell';

type Props = {
  cost: number;
};

const Component = styled(Cell)({
  fontSize: '24px',
  color: color.final,
});

export const Final: FC<Props> = (props) => {
  const cost = precision(props.cost);

  return <Component>${cost}</Component>;
};
