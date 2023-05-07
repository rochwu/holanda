import styled from '@emotion/styled';
import {FC} from 'react';
import {MdFlip} from 'react-icons/md';

import {attributes} from '../attributes';
import {useStore} from '../store';
import {color, spacing} from '../styles';

import {Cell} from './Cell';
import {colors} from './colors';

const Container = styled(Cell)(
  colors(color.buttons.number),
  {
    width: '48px',
    margin: spacing.gap,
  },
  ({theme}) => {
    if (theme.lefty) {
      return {
        transform: 'scaleX(-1)',
      };
    }
  },
);

export const Flip: FC = () => {
  const flip = useStore((state) => state.flip);

  return (
    <Container onClick={flip} {...attributes.input}>
      <MdFlip />
    </Container>
  );
};
