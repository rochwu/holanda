import styled from '@emotion/styled';
import {FC} from 'react';
import {useStore} from './state';

const Container = styled.div({
  position: 'absolute',
  top: 0,
  left: 0,
});

const isDev = !!process.env.NODE_ENV?.includes('dev');

const Prod: FC = () => null;

const Dev: FC = () => {
  const state = useStore((state) => state);

  const reset = () => {
    console.log('reset');
    state.reset();
  };

  return (
    <Container>
      <button onClick={reset}>reset input state</button>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </Container>
  );
};

export const Debug: FC = isDev ? Dev : Prod;
