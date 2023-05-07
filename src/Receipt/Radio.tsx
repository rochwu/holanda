import styled from '@emotion/styled';
import {FC} from 'react';

import {color} from '../styles';

type Props = {
  selected?: boolean;
  onClick: () => void;
};

const size = '36px';

const Component = styled.div<{selected?: boolean}>(({selected}) => ({
  cursor: 'pointer',
  margin: 'auto 0',
  width: size,
  height: size,
  borderRadius: size,
  backgroundColor: selected
    ? color.positive
    : color.buttons.number.backgroundColor,
}));

export const Radio: FC<Props> = ({selected, onClick}) => {
  return <Component onClick={onClick} selected={selected} />;
};
