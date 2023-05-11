import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';
import {FC, useEffect, useMemo} from 'react';

import {useStore} from '../../store';
import {color} from '../../styles';
import {reduce, stringify} from '../../tokens';

const blink = keyframes({
  '0%, 100%': {
    borderBottomColor: color.buttons.number.color,
  },
  '50%': {
    borderBottomColor: 'transparent',
  },
});

const caretSize = '2px';

const Caret = styled.span({
  borderTop: `${caretSize} solid transparent`,
  borderBottomStyle: 'solid',
  borderBottomWidth: caretSize,
  animation: `${blink} 1s linear infinite`,
});

const splitLast = (text: string) => {
  return [text.slice(0, -1), text.slice(-1)];
};

export const Editing: FC = () => {
  const tokens = useStore((state) => state.tokens);
  const tally = useStore((state) => state.tally);

  const [rest, last] = useMemo(() => {
    const result = (stringify.field(reduce(tokens)) || 0).toString();

    return splitLast(result);
  }, [tokens]);

  useEffect(tally, [tokens]);

  return (
    <>
      {rest}
      <Caret>{last}</Caret>
    </>
  );
};
