import {FC} from 'react';

import {enoughDots, useStore} from '../../store';
import {OpType} from '../../types';

import {Operator, OperatorProps} from './Operator';

type Props = Omit<OperatorProps, 'op' | 'onClick'>;

export const Dot: FC<Props> = (props) => {
  const disabled = useStore(enoughDots);

  const pushDot = useStore((state) => state.pushDot);

  return (
    <Operator
      op={OpType.Dot}
      onClick={pushDot}
      disabled={disabled}
      {...props}
    />
  );
};
