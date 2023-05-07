import styled from '@emotion/styled';
import {FC} from 'react';
import {FiDelete} from 'react-icons/fi';

import {useStore} from '../store';
import {styles} from '../styles';

import {Cell} from './Cell';
import {colors} from './colors';

const color = colors(styles.color.buttons.negative);

const Component = styled(Cell)(color);

export const Backspace: FC = () => {
  const pop = useStore((state) => state.pop);
  const disabled = useStore(({tokens}) => tokens.length === 0);

  return (
    <Component disabled={disabled} onClick={pop}>
      <FiDelete />
    </Component>
  );
};
