import styled from '@emotion/styled';
import {FC, MouseEventHandler, useRef} from 'react';

import {Debug} from './Debug';
import {GlobalStyles} from './GlobalStyles';
import {Keypad} from './Keypad';
import {Receipt} from './Receipt';
import {System} from './System';
import {Theming} from './Theming';
import {attributes} from './attributes';
import {useStore} from './store';
import {useAutoResize} from './useAutoResize';
import {Header} from './Header';
import {Instructions} from './Instructionts';

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

  const tally = useStore((state) => state.tally);

  // TODO: Maybe tally on change
  const click: MouseEventHandler<HTMLDivElement> = ({target}) => {
    if (target && attributes.read(target as HTMLElement) === null) {
      tally();
    }
  };

  return (
    <Theming ref={content}>
      <Header />
      <Container>
        <Instructions />
        <Receipt onClick={click} />
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
