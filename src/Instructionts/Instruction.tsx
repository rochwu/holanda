import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';
import {spacing} from '../styles';

import type {IconType} from 'react-icons';

type Props = {
  Icon?: IconType;
  children: ReactNode;
};

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: spacing.inputPadding,
  paddingInlineStart: spacing.focus,
});

const Text = styled.span({
  fontSize: spacing.label,
});

export const Instruction: FC<Props> = ({Icon, children}) => {
  return (
    <Container>
      {Icon && <Icon />}
      <Text>{children}</Text>
    </Container>
  );
};
