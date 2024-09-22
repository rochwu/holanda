import styled from '@emotion/styled';
import {FC} from 'react';

import {useStore} from './store';
import {color} from './styles';
import {stringify} from './tokens';

const Container = styled.div({
  position: 'absolute',
  color: color.light,
  top: 0,
  left: 0,
});

const Prod: FC = () => null;

const Dev: FC = () => {
  const state = useStore((state) => state);

  const reset = () => {
    state.reset();
  };

  return (
    <Container>
      <button onClick={reset}>reset input state</button>
      <pre>{stringify.field(state.tokens)}</pre>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </Container>
  );
};

// TODO: Debug mode is pretty slow in mobile
export const Debug: FC = process.env.NODE_ENV === 'development' ? Dev : Prod;
