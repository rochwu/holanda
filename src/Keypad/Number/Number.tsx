import styled from '@emotion/styled';
import {FC} from 'react';
import {enoughCents, useStore} from '../../state';
import {Cell} from '../Cell';
import {Token, Type} from '../../types';
import {tokenizer} from '../../tokenization';

const Component = styled(Cell)({
  backgroundColor: 'white',
  ':active:not(:disabled)': {
    backgroundColor: 'lightgray',
  },
  ':hover:not(:disabled)': {
    filter: 'brightness(75%)',
  },
});

type ComponentProps = Omit<
  Parameters<typeof Component>[0],
  'onClick' | 'label'
>;

export type NumberProps = {
  number: number;
} & Partial<ComponentProps>;

export const Number: FC<NumberProps> = ({
  number,
  disabled: disabledOverride,
  ...props
}) => {
  const pushNumber = useStore((state) => state.pushNumber);
  const disabled = useStore(enoughCents);

  const click = () => {
    const token = tokenizer.number(number);

    pushNumber(token);
  };

  return (
    <Component
      onClick={click}
      label={number.toString()}
      disabled={disabledOverride ?? disabled}
      {...props}
    />
  );
};
