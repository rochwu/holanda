import styled from '@emotion/styled';
import {FC} from 'react';
import {MdFlip} from 'react-icons/md';

import {attributes} from '../attributes';
import {useStore} from '../store';

import {Cell} from './Cell';

const Container = styled(Cell)(
  {
    width: '48px',
    color: 'black',
    backgroundColor: 'transparent',
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
