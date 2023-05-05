import styled from '@emotion/styled';
import {ChangeEvent, FC, FormEventHandler, useEffect} from 'react';
import {reduce, stringify, tokenizer} from '../../tokens';
import {useInputState} from '../../input-state';

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

  const change = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {};

  return <Component>{stringify.field(reduced)}</Component>;
};
