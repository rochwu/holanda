import styled from '@emotion/styled';
import {FC} from 'react';
import {FiDelete} from 'react-icons/fi';
import {MdSwipeVertical, MdSwipe, MdTouchApp} from 'react-icons/md';

import {color, spacing} from '../styles';

import {Instruction} from './Instruction';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.inputPadding,
  top: `48px`,
  position: 'absolute',
  color: color.light,
  insetInlineStart: `16px`,
});

export const Instructions: FC = () => {
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
