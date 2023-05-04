import {FC} from 'react';
import {OpType} from '../../types';

import {FiDelete, FiDivide, FiX, FiPlus, FiMinus} from 'react-icons/fi';
import {RxDot} from 'react-icons/rx';

type Props = {
  op: OpType;
};

export const Icon: FC<Props> = ({op}) => {
  switch (op) {
    case OpType.Add:
      return <FiPlus />;
    case OpType.Subtract:
      return <FiMinus />;
    case OpType.Multiply:
      return <FiX />;
    case OpType.Divide:
      return <FiDivide />;
    case OpType.Decimal:
    default:
      return <RxDot />;
  }
};
