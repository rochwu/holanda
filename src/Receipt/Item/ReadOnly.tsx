import styled from '@emotion/styled';
import {FC, useCallback} from 'react';

import {precision} from '../../precision';
import {Id, useStore} from '../../store';
import {Cell} from '../Cell';

type Props = {
  identifier: Id;
};

const Component = styled(Cell)({});

export const ReadOnly: FC<Props> = ({identifier: id}) => {
  const value = useStore(useCallback((state) => state.byId[id], [id]));
  const total = useStore(useCallback((state) => state.byId['total'], []));
  const subtotal = useStore(useCallback((state) => state.byId['subtotal'], []));

  if (value && total && subtotal) {
    const ratio = value / subtotal;

    const display = total * ratio;

    return <Component>{precision(display)}</Component>;
  }

  return null;
};
