import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';
import type {IconType} from 'react-icons';

import {spacing} from '../styles';

type Props = {
  Icon?: IconType;
  children: ReactNode;
};

const Container = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: spacing.focus,
  paddingInlineStart: spacing.focus,
});

const Text = styled.span({
  fontSize: spacing.label,
});

export const Tip: FC<Props> = ({Icon, children}) => {
  return (
    <Container>
      {Icon && <Icon />}
      <Text>{children}</Text>
    </Container>
  );
};
