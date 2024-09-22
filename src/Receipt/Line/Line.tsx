import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';

import {attributes} from '../../attributes';
import {spacing} from '../../styles';
import {Label} from '../Label';

import {Heading} from './Heading';

const Container = styled.div({
  display: 'flex',
  gap: spacing.inputPadding,
  justifyContent: 'end',
  position: 'relative',
});

type Props = {
  children: ReactNode;
  heading?: string;
} & Parameters<typeof Container>[0] &
  Parameters<typeof Label>[0];

export const Line: FC<Props> = ({
  name,
  symbol,
  children,
  heading,

  ...elementProps
}) => {
  return (
    <Container {...elementProps}>
      {heading && <Heading {...attributes.text}>{heading}</Heading>}
      {name && <Label name={name} symbol={symbol} />}
      {children}
    </Container>
  );
};
