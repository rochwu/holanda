import styled from '@emotion/styled';
import {FC} from 'react';

import {useInputState, previousToken} from '../../input-state';
import {isOp} from '../../is';
import {tokenizer} from '../../tokens';
import {OpType} from '../../types';
import {Cell} from '../Cell';
import {colors} from '../colors';

import {Icon} from './Icon';

const color = colors({
  backgroundColor: '#1E4785',
  color: 'white',
});

const Component = styled(Cell)(color);

type ComponentProps = Parameters<typeof Component>[0];

export type OperatorProps = {
  op: OpType;
} & Partial<ComponentProps>;

export const Operator: FC<OperatorProps> = ({
  op,
  disabled: disabledOverride,
  onClick: onClickOverride,
  ...props
}) => {
  const pushOp = useInputState((state) => state.pushOp);
  const disabled = useInputState((state) => {
    const previous = previousToken(state);

    if (!previous) {
      return true;
    }

    if (isOp(previous) && previous.op === op) {
      return true;
    }

    return false;
  });

  const click = () => {
    const token = tokenizer.op(op);

    pushOp(token);
  };

  return (
    <Component
      {...props}
      onClick={onClickOverride ?? click}
      disabled={disabledOverride ?? disabled}
    >
      <Icon op={op} />
    </Component>
  );
};
