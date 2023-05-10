import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';

import {attributes} from '../../attributes';
import {spacing} from '../../styles';

import {Label} from '../Label';
import {Heading} from './Heading';

const Container = styled.div({
  display: 'flex',
  gap: spacing.focus,
  justifyContent: 'end',
  position: 'relative',
});

type Props = {
  label?: string;
  children: ReactNode;
  heading?: string;
} & Parameters<typeof Container>[0];

export const Line: FC<Props> = ({
  label,
  children,
  heading,
  ...elementProps
}) => {
  return (
    <Container {...elementProps}>
      {heading && <Heading {...attributes.text}>{heading}</Heading>}
      {label && <Label>{label}</Label>}
      {children}
    </Container>
  );
};
