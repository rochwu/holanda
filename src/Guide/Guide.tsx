import styled from '@emotion/styled';
import {FC} from 'react';
import {
  PiBackspaceBold,
  PiCopySimpleBold,
  PiHandSwipeLeftBold,
} from 'react-icons/pi';

import {color, spacing} from '../styles';

import {Tip} from './Tip';

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

export const Guide: FC = () => {
  return (
    <Container>
      <Tip Icon={PiHandSwipeLeftBold}>swipe to field</Tip>
      <Tip Icon={PiBackspaceBold}>hold to clear</Tip>
      <Tip Icon={PiCopySimpleBold}>
        tap <FinalText>$</FinalText> to copy
      </Tip>
    </Container>
  );
};
