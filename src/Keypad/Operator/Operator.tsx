import styled from '@emotion/styled';
import {FC} from 'react';
import {Cell} from '../Cell';
import {isOp, OpType} from '../../types';
import {sign} from '../../sign';
import {useStore} from '../../state';
import {colors} from '../colors';
import {tokenizer} from '../../tokenization';

const color = colors({
  backgroundColor: '#1E4785',
  color: 'white',
});

const Component = styled(Cell)(color);

type ComponentProps = Omit<Parameters<typeof Component>[0], 'label'>;

export type OperatorProps = {
  op: OpType;
} & Partial<ComponentProps>;

export const Operator: FC<OperatorProps> = ({
  op,
  disabled: disabledOverride,
  onClick: onClickOverride,
  ...props
}) => {
  const pushOp = useStore((state) => state.pushOp);
  const disabled = useStore(({tokens}) => {
    const previous = tokens.at(-1);

    if (!previous) {
      return true;
    }

    if (isOp(previous) && previous.op === op) {
      return true;
    }

    return false;
  });

  const label = sign(op);

  const click = () => {
    const token = tokenizer.op(op);

    pushOp(token);
  };

  return (
    <Component
      {...props}
      onClick={onClickOverride ?? click}
      label={label}
      disabled={disabledOverride ?? disabled}
    />
  );
};
