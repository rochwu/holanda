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

export const Final: FC<Props> = ({identifier: id}) => {
  const value = useValue(id);
  const total = useValue(Ids.Total);
  const subtotal = useValue(Ids.Subtotal);

  if (value && total && subtotal) {
    const ratio = value / subtotal;

    const display = total * ratio;

    return <Component>${precision(display)}</Component>;
  }

  return null;
};
