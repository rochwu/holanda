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
import {color} from './styles';
import {useAutoResize} from './useAutoResize';

const Container = styled.div({
  position: 'relative',
  display: 'grid',
  maxWidth: '393px', // iPhone 14 Pro
  maxHeight: '660px',
  gridAutoRows: '1fr',
  backgroundColor: color.background,
});

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

  const click: MouseEventHandler<HTMLDivElement> = ({target}) => {
    if (target && attributes.read(target as HTMLElement) === null) {
      tally();
    }
  };

  return (
    <Theming>
      <Container ref={content}>
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
