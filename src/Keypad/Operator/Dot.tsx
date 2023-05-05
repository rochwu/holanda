import {FC} from 'react';

import {enoughDots, useInputState} from '../../input-state';
import {OpType} from '../../types';

import {Operator, OperatorProps} from './Operator';

type Props = Omit<OperatorProps, 'op' | 'onClick'>;

export const Dot: FC<Props> = (props) => {
  const disabled = useInputState(enoughDots);

  const pushDot = useInputState((state) => state.pushDot);

  return (
    <Operator
      op={OpType.Dot}
      onClick={pushDot}
      disabled={disabled}
      {...props}
    />
  );
};
