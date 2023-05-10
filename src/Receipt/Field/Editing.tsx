import {FC, useMemo} from 'react';

import {useStore} from '../../store';
import {reduce, stringify} from '../../tokens';

import styled from '@emotion/styled';
import {color} from '../../styles';
import {keyframes} from '@emotion/react';

type Props = {};

const blink = keyframes({
  '0%, 100%': {
    borderBottomColor: color.buttons.number.color,
  },
  '50%': {
    borderBottomColor: 'transparent',
  },
});

const Caret = styled.span({
  borderBottomStyle: 'solid',
  borderBottomWidth: '2px',
  animation: `${blink} 1s linear infinite`,
});

const splitLast = (text: string) => {
  return [text.slice(0, -1), text.slice(-1)];
};

export const Editing: FC<Props> = () => {
  const tokens = useStore((state) => state.tokens);

  const [rest, last] = useMemo(() => {
    const result = (stringify.field(reduce(tokens)) || 0).toString();

    return splitLast(result);
  }, [tokens]);

  return (
    <>
      {rest}
      <Caret>{last}</Caret>
    </>
  );
};
