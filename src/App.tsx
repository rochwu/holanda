import styled from '@emotion/styled';
import {FC, useRef} from 'react';

import {Debug} from './Debug';
import {Keypad} from './Keypad';
import {Receipt} from './Receipt';
import {useAutoResize} from './useAutoResize';

const Container = styled.div({
  position: 'relative',
  display: 'grid',
  maxWidth: '393px', // iPhone 14 Pro
  maxHeight: '660px',
  gridAutoRows: '1fr',
  backgroundColor: 'white',
});

export const App: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useAutoResize();
  useAutoResize({change: ref});

  return (
    <>
      <Debug />
      <Container ref={ref}>
        <Receipt />
        <Keypad />
      </Container>
    </>
  );
};
