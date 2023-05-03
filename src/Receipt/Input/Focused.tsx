import styled from '@emotion/styled';
import {ChangeEvent, FC, FormEventHandler} from 'react';
import {reduce} from '../../reduce';
import {useStore} from '../../state';

import {stringify} from '../../tokenization';

const Component = styled.div({});

export type FocusedProps = {
  value: number;
  onChange: (value: number) => void;
};

export const Focused: FC<FocusedProps> = ({onChange}) => {
  const tokens = useStore((state) => state.tokens);
  const reduced = reduce(tokens);

  const change = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {};

  return <Component>{stringify(reduced)}</Component>;
};
