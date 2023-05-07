import {Global, css} from '@emotion/react';
import styled from '@emotion/styled';
import {FC} from 'react';

export const Body = styled.div({
  display: 'grid',
  placeContent: 'center',
  position: 'relative',
  backgroundColor: '#ffe0b0',
  fontFamily: '"Varela Round", sans-serif',

  button: {
    fontFamily: '"Varela Round", sans-serif',
  },
});

const styles = css({
  body: {
    display: 'grid',
    placeContent: 'center',
    position: 'relative',
    backgroundColor: '#ffe0b0',
    overflow: 'hidden',
    margin: 0,
  },

  'body, button': {
    fontFamily: '"Varela Round", sans-serif',
  },
});

export const GlobalStyles: FC = () => {
  return <Global styles={styles} />;
};
