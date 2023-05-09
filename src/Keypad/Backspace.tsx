import styled from '@emotion/styled';
import {FC, useRef} from 'react';
import {FiDelete} from 'react-icons/fi';

import {useStore} from '../store';
import {styles} from '../styles';

import {Cell} from './Cell';
import {colors} from './colors';

const color = colors(styles.color.buttons.action);

const Component = styled(Cell)(color);

export const Backspace: FC = () => {
  const interval = useRef<number>();

  const pop = useStore((state) => state.pop);
  const disabled = useStore(({tokens}) => tokens.length === 0);
  const clear = useStore((state) => state.clear);

  const cancel = () => {
    window.clearTimeout(interval.current);
  };

  const start = () => {
    interval.current = window.setTimeout(clear, 500);
  };

  return (
    <Component
      disabled={disabled}
      onClick={pop}
      onTouchStart={start}
      onTouchEnd={cancel}
      onTouchCancel={cancel}
    >
      <FiDelete />
    </Component>
  );
};
