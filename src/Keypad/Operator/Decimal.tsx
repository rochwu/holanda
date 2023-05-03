import {FC} from 'react';
import {OpType} from '../../types';
import {enoughDots, shouldPad, useStore} from '../../state';

import {Operator, OperatorProps} from './Operator';
import {tokenizer} from '../../tokens';

type Props = Omit<OperatorProps, 'op' | 'onClick'>;

export const Decimal: FC<Props> = (props) => {
  const disabled = useStore(enoughDots);
  const pad = useStore(shouldPad);

  const pushOp = useStore((state) => state.pushOp);
  const pushNumber = useStore((state) => state.pushNumber);

  const click = () => {
    const token = tokenizer.op(OpType.Decimal);

    if (pad) {
      pushNumber(tokenizer.zero());
    }

    pushOp(token);
  };

  return (
    <Operator
      op={OpType.Decimal}
      onClick={click}
      disabled={disabled}
      {...props}
    />
  );
};
