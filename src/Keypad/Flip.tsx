import styled from '@emotion/styled';
import {FC} from 'react';
import {MdFlip} from 'react-icons/md';

import {useStore} from '../store';
import {styles} from '../styles';

import {Cell} from './Cell';
import {colors} from './colors';

const buttonStyles = styles.color.buttons.action;

const color = colors({
  color: buttonStyles.backgroundColor,
  backgroundColor: buttonStyles.color,
});

const Container = styled(Cell)(
  color,
  {
    width: '48px',
    margin: styles.spacing.gap,
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
    <Container onClick={flip}>
      <MdFlip />
    </Container>
  );
};
