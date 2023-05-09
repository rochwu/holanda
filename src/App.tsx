import styled from '@emotion/styled';
import {useSwipe} from '@nederland/use-swipe';
import {FC, MouseEventHandler, useRef} from 'react';

import {Debug} from './Debug';
import {GlobalStyles} from './GlobalStyles';
import {Keypad} from './Keypad';
import {Receipt} from './Receipt';
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

export const App: FC = () => {
  const content = useRef<HTMLDivElement>(null);

  useAutoResize();
  useAutoResize({change: content});

  const tally = useStore((state) => state.tally);

  useSwipe((action) => {
    console.log('SWIPE', action);
  });

  const click: MouseEventHandler<HTMLDivElement> = ({target}) => {
    if (target && attributes.read(target as HTMLElement) === null) {
      tally();
    }
  };

  return (
    <>
      <GlobalStyles />
      <Debug />
      <Theming>
        <Container ref={content}>
          <Receipt onClick={click} />
          <Keypad />
        </Container>
      </Theming>
    </>
  );
};
