import styled from '@emotion/styled';
import {FC} from 'react';
import {color, spacing} from '../styles';

import {MdSwipeVertical, MdSwipe, MdTouchApp} from 'react-icons/md';
import {FiDelete} from 'react-icons/fi';

import {Instruction} from './Instruction';

type Props = {};

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.inputPadding,
  top: `48px`,
  left: `16px`,
  position: 'absolute',
  color: color.light,
});

export const Instructions: FC<Props> = () => {
  return (
    <Container>
      <Instruction>GUIDE</Instruction>
      <Instruction Icon={MdSwipeVertical}>jump to field</Instruction>
      <Instruction Icon={MdSwipe}>jump to field</Instruction>
      <Instruction Icon={FiDelete}>hold to delete</Instruction>
      <Instruction Icon={MdTouchApp}>tap to calculate</Instruction>
    </Container>
  );
};
