import {FC} from 'react';
import {isNumber, isOp, OpType} from '../../types';
import {useStore} from '../../state';

import {Operator, OperatorProps} from './Operator';
import {tokenizer} from '../../tokenization';

type Props = Omit<OperatorProps, 'op' | 'onClick'>;

export const Decimal: FC<Props> = (props) => {
  const disabled = useStore((state) => {
    if (state.ops.at(-1) === OpType.Decimal) {
      return true;
    }

    if (isOp(state.tokens.at(-1))) {
      if (state.ops.at(-2) === OpType.Decimal) {
        return true;
      }
    }

    return false;
  });
  const pushOp = useStore((state) => state.pushOp);
  const pushNumber = useStore((state) => state.pushNumber);
  const pad = useStore(({tokens}) => {
    const previous = tokens.at(-1);

    if (!isNumber(previous)) {
      return true;
    }

    return false;
  });

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
