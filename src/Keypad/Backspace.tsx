import styled from '@emotion/styled';
import {FC} from 'react';
import {FiDelete} from 'react-icons/fi';

import {useStore} from '../store';
import {styles} from '../styles';
import {useLongPress} from '../useLongPress';

import {Cell} from './Cell';
import {colors} from './colors';

const color = colors(styles.color.buttons.action);

const Component = styled(Cell)(color);

export const Backspace: FC = () => {
  const pop = useStore((state) => state.pop);
  const disabled = useStore(({tokens}) => tokens.length === 0);
  const clear = useStore((state) => state.clear);

  const {props} = useLongPress(clear);

  return (
    <Component
      aria-label="backspace"
      disabled={disabled}
      onClick={pop}
      {...props}
    >
      <FiDelete />
    </Component>
  );
};
