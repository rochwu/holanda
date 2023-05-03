import styled from '@emotion/styled';
import {FC} from 'react';
import {useStore} from '../state';
import {Cell} from './Cell';
import {colors} from './colors';

const color = colors({
  backgroundColor: '#A91F32',
  color: 'white',
});

const Component = styled(Cell)(color);

const backspaceSign = '\u232B';

export const Backspace: FC = () => {
  const pop = useStore((state) => state.pop);
  const disabled = useStore(({tokens}) => tokens.length === 0);

  return <Component disabled={disabled} onClick={pop} label={backspaceSign} />;
};
