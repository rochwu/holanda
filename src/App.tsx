import styled from '@emotion/styled';
import {FC, useEffect, useRef} from 'react';
import {Keypad} from './Keypad';
import {Receipt} from './Receipt';
import {useAutoResize} from './useAutoResize';

const Container = styled.div({
  display: 'grid',
  maxWidth: '393px', // iPhone 14 Pro
  maxHeight: '660px',
  gridAutoRows: '1fr',
  backgroundColor: 'white',
});

export const App: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useAutoResize({change: ref});

  return (
    <Container ref={ref}>
      <Receipt />
      <Keypad />
    </Container>
  );
};
