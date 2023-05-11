import {Theme, ThemeProvider} from '@emotion/react';
import styled from '@emotion/styled';
import {ReactNode, forwardRef} from 'react';

import {useStore} from './store';
import {color} from './styles';

type Props = {
  children: ReactNode;
};

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  maxWidth: '393px', // iPhone 14 Pro
  maxHeight: '660px',
  backgroundColor: color.background,
});

export const Theming = forwardRef<HTMLDivElement, Props>(({children}, ref) => {
  const lefty = useStore((state) => state.lefty);

  const theme: Theme = {
    lefty,
  };

  return (
    <Container ref={ref} dir={lefty ? 'rtl' : 'ltr'}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Container>
  );
});

Theming.displayName = 'Theming';
