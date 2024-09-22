import styled from '@emotion/styled';
import {FC, useRef} from 'react';

import {Debug} from './Debug';
import {GlobalStyles} from './GlobalStyles';
import {Guide} from './Guide';
import {Keypad} from './Keypad';
import {Receipt} from './Receipt';
import {System} from './System';
import {Theming} from './Theming';
import {useAutoResize} from './useAutoResize';

const Container = styled.div({
  display: 'grid',
  gridAutoRows: '1fr',
  position: 'relative',
});

// Only renders null
const Virtual: FC = () => {
  return (
    <>
      <GlobalStyles />
      <Debug />
      <System />
    </>
  );
};

const Real: FC = () => {
  const content = useRef<HTMLDivElement>(null);

  useAutoResize();
  useAutoResize({change: content});

  return (
    <Theming ref={content}>
      <Container>
        <Guide />
        <Receipt />
        <Keypad />
      </Container>
    </Theming>
  );
};

export const App: FC = () => {
  return (
    <>
      <Virtual />
      <Real />
    </>
  );
};
