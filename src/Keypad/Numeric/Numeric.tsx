import styled from '@emotion/styled';
import {FC} from 'react';

import {enoughCents, useStore} from '../../store';
import {color} from '../../styles';
import {tokenizer} from '../../tokens';
import {Cell} from '../Cell';
import {colors} from '../colors';

const Component = styled(Cell)(colors(color.buttons.number));

type ComponentProps = Omit<Parameters<typeof Component>[0], 'onClick'>;

export type NumericProps = {
  value: number;
} & Partial<ComponentProps>;

export const Numeric: FC<NumericProps> = ({
  value,
  disabled: disabledOverride,
  ...props
}) => {
  const pushNumeric = useStore((state) => state.pushNumeric);
  const disabled = useStore(enoughCents);

  const click = () => {
    const token = tokenizer.numeric(value);

    pushNumeric(token);
  };

  return (
    <Component
      onClick={click}
      disabled={disabledOverride ?? disabled}
      {...props}
    >
      {value.toString()}
    </Component>
  );
};
