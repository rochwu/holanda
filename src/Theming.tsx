import {Theme, ThemeProvider} from '@emotion/react';
import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';

import {useStore} from './store';

type Props = {
  children: ReactNode;
};

const Container = styled.div({});

export const Theming: FC<Props> = ({children}) => {
  const lefty = useStore((state) => state.lefty);

  const theme: Theme = {
    lefty,
  };

  return (
    <Container dir={lefty ? 'rtl' : 'ltr'}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Container>
  );
};
