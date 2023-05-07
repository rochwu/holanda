import {Global, css} from '@emotion/react';
import {FC} from 'react';

const styles = css({
  body: {
    display: 'grid',
    placeContent: 'center',
    position: 'relative',
    backgroundColor: '#ffe0b0',
    overflow: 'hidden', // stops iOS safari from swiping vertically
    userSelect: 'none', // iOS sucks when double click selects shit
    margin: 0, // no user agent
  },

  'body, button': {
    fontFamily: '"Varela Round", sans-serif',
  },
});

export const GlobalStyles: FC = () => {
  return <Global styles={styles} />;
};
