import styled from '@emotion/styled';
import {FC} from 'react';
import {Cell} from '../Cell';
import {isOp, OpType} from '../../types';
import {symbols, tokenizer} from '../../tokens';
import {useStore} from '../../state';
import {colors} from '../colors';
import {previousToken} from '../../state/selectors';

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
  const disabled = useStore((state) => {
    const previous = previousToken(state);

    if (!previous) {
      return true;
    }

    if (isOp(previous) && previous.op === op) {
      return true;
    }

    return false;
  });

  const label = symbols.label(op);

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
