import styled from '@emotion/styled';
import {FC} from 'react';
import {enoughCents, useInputState} from '../../input-state';
import {Cell} from '../Cell';
import {tokenizer} from '../../tokens';

const Component = styled(Cell)({
  backgroundColor: 'white',
  color: 'black',
  ':active:not(:disabled)': {
    backgroundColor: 'lightgray',
  },
  ':hover:not(:disabled)': {
    filter: 'brightness(75%)',
  },
});

type ComponentProps = Omit<Parameters<typeof Component>[0], 'onClick'>;

export type NumberProps = {
  number: number;
} & Partial<ComponentProps>;

export const Number: FC<NumberProps> = ({
  number,
  disabled: disabledOverride,
  ...props
}) => {
  const pushNumber = useInputState((state) => state.pushNumber);
  const disabled = useInputState(enoughCents);

  const click = () => {
    const token = tokenizer.number(number);

    pushNumber(token);
  };

  return (
    <Component
      onClick={click}
      disabled={disabledOverride ?? disabled}
      {...props}
    >
      {number.toString()}
    </Component>
  );
};
