import styled from '@emotion/styled';
import {ChangeEvent, FC, useEffect} from 'react';

import {useInputState} from '../../input-state';
import {reduce, stringify, tokenizer} from '../../tokens';

const Component = styled.div({});

export type FocusedProps = {
  value: number;
  onChange: (value: number) => void;
};

export const Focused: FC<FocusedProps> = ({value, onChange}) => {
  const set = useInputState((state) => state.set);

  const tokens = useInputState((state) => state.tokens);

  useEffect(() => {
    set(value);
  }, []);

  const reduced = tokens.length > 0 ? reduce(tokens) : [tokenizer.zero()];

  const change = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(value));
  };

  console.log(change);

  return <Component>{stringify.field(reduced)}</Component>;
};
