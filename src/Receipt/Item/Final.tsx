import styled from '@emotion/styled';
import {FC} from 'react';

import {precision} from '../../precision';
import {Id, Ids, useValue} from '../../store';
import {color} from '../../styles';
import {Cell} from '../Cell';

type Props = {
  identifier: Id;
};

const Component = styled(Cell)({
  fontSize: '24px',
  color: color.final,
});

const useCost = (id: Id) => {
  const value = useValue(id);
  const total = useValue(Ids.Total);
  const subtotal = useValue(Ids.Subtotal);

  if (value && total && subtotal) {
    const ratio = value / subtotal;

    return precision(total * ratio);
  }

  return 0;
};

export const Final: FC<Props> = ({identifier: id}) => {
  const cost = useCost(id);

  return <Component>${cost}</Component>;
};
