import {FC} from 'react';
import {FiDivide, FiX, FiPlus, FiMinus} from 'react-icons/fi';
import {RxDot} from 'react-icons/rx';

import {OpType} from '../../types';

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
    case OpType.Dot:
    default:
      return <RxDot />;
  }
};
