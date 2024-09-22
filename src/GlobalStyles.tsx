import {Global, css} from '@emotion/react';
import {FC} from 'react';

import {color} from './styles';

const styles = css({
  body: {
    display: 'grid',
    placeContent: 'center',
    position: 'relative',
    backgroundColor: color.background,
    overflow: 'hidden', // stops iOS safari from swiping vertically
    userSelect: 'none', // iOS sucks when double click selects shit
    margin: 0, // no user agent
    overscrollBehaviorX: 'none', // Prevent swipes from going history back and forth
  },

  'body, button': {
    fontFamily: '"Nunito", sans-serif',
  },

  button: {
    border: 'none', // resets most user agents
  },
});

export const GlobalStyles: FC = () => {
  return <Global styles={styles} />;
};
