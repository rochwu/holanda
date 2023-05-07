import {Global, css} from '@emotion/react';
import {FC} from 'react';

import {color} from './styles';

const styles = css({
  body: {
    display: 'grid',
    placeContent: 'center',
    position: 'relative',
    backgroundColor: color.dev,
    overflow: 'hidden', // stops iOS safari from swiping vertically
    userSelect: 'none', // iOS sucks when double click selects shit
    margin: 0, // no user agent
  },

  'body, button': {
    fontFamily: '"Lato", sans-serif',
  },

  button: {
    border: 'none', // resets most user agents
  },
});

export const GlobalStyles: FC = () => {
  return <Global styles={styles} />;
};
