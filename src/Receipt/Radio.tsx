import styled from '@emotion/styled';
import {FC} from 'react';

import {color} from '../styles';

type Props = {
  selected?: boolean;
  onClick: () => void;
};

const size = '44px';

const Background = styled.div({
  display: 'grid',
  placeContent: 'center',
  height: '100%',
});

const Component = styled.button<{selected?: boolean}>(({selected}) => ({
  cursor: 'pointer',
  height: size,
  width: size,
  borderRadius: size,
  backgroundColor: selected
    ? color.action
    : color.buttons.number.backgroundColor,
}));

export const Radio: FC<Props> = ({selected, onClick}) => {
  return (
    <Background onClick={onClick}>
      <Component selected={selected} />
    </Background>
  );
};
