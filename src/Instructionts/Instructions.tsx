import styled from '@emotion/styled';
import {FC} from 'react';
import {FiDelete, FiClipboard} from 'react-icons/fi';
import {MdOutlineSwipeVertical, MdOutlineSwipe} from 'react-icons/md';

import {color, spacing} from '../styles';

import {Instruction} from './Instruction';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: spacing.inputPadding,
  top: `46px`, // To make guide be right in the middle of two inputs
  position: 'absolute',
  color: color.light,
  insetInlineStart: `16px`,
});

const FinalText = styled.span({
  color: color.final,
});

export const Instructions: FC = () => {
  return (
    <Container>
      <Instruction>GUIDE</Instruction>
      <Instruction Icon={MdOutlineSwipeVertical}>jump to field</Instruction>
      <Instruction Icon={MdOutlineSwipe}>jump to field</Instruction>
      <Instruction Icon={FiDelete}>hold to delete</Instruction>
      <Instruction Icon={FiClipboard}>
        tap <FinalText>$</FinalText> to copy
      </Instruction>
    </Container>
  );
};
