import {FC, useMemo} from 'react';
import {
  PiDivideBold,
  PiDotOutlineBold,
  PiMinusBold,
  PiPlusBold,
  PiXBold,
} from 'react-icons/pi';

import {OpType} from '../../types';

type Props = {
  op: OpType;
};

const getComponent = (op: OpType) => {
  switch (op) {
    case OpType.Add:
      return PiPlusBold;
    case OpType.Subtract:
      return PiMinusBold;
    case OpType.Multiply:
      return PiXBold;
    case OpType.Divide:
      return PiDivideBold;
    case OpType.Dot:
    default:
      return PiDotOutlineBold;
  }
};

export const Icon: FC<Props> = ({op}) => {
  const Component = useMemo(() => getComponent(op), [op]);

  return <Component />;
};
