import styled from '@emotion/styled';
import {FC} from 'react';

import {color} from '../styles';

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

type Props = {
  selected?: boolean;
  onClick: () => void;
} & Parameters<typeof Component>[0];

export const Radio: FC<Props> = ({
  selected,
  onClick,
  ['aria-label']: ariaLabel,
}) => {
  return (
    <Background onClick={onClick}>
      <Component aria-label={ariaLabel} selected={selected} />
    </Background>
  );
};
