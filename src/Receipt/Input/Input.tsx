import styled from '@emotion/styled';
import {FC, useState} from 'react';
import {Focused, FocusedProps} from './Focused';

const Component = styled.div({
  padding: '1em',
  border: '1px solid black',
});

type Props = {
  value: number;
} & Pick<FocusedProps, 'onChange'>;

export const Input: FC<Props> = ({value = 0, onChange}) => {
  const [hasFocus, setHasFocus] = useState(false);

  const focus = () => {
    setHasFocus(true);
  };

  const blur = () => {
    setHasFocus(false);
  };

  return (
    <Component tabIndex={0} onFocus={focus} onBlur={blur}>
      {hasFocus ? <Focused /> : value}
    </Component>
  );
};
