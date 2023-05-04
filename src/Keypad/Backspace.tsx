import styled from '@emotion/styled';
import {FC} from 'react';
import {useStore} from '../state';
import {Cell} from './Cell';
import {colors} from './colors';
import {FiDelete} from 'react-icons/fi';

const color = colors({
  backgroundColor: '#A91F32',
  color: 'white',
});

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
