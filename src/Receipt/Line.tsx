import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';

import {attributes} from '../attributes';
import {color, spacing} from '../styles';

import {Label} from './Label';

const Container = styled.div<{divide?: boolean}>(
  {
    display: 'flex',
    gap: spacing.inputGap,
    justifyContent: 'end',
    position: 'relative',
  },
  ({divide}) => {
    if (divide) {
      return {
        borderTop: '1px solid black',
      };
    }
  },
);

type Props = {
  label?: string;
  children: ReactNode;
  heading?: string;
} & Parameters<typeof Container>[0];

const Heading = styled.div(
  color.buttons.positive,
  {
    position: 'absolute',
    top: 0,
    textTransform: 'uppercase',
    padding: '2px 8px',
    fontSize: '14px',
  },
  ({theme}) => {
    if (theme.lefty) {
      return {
        right: 0,
      };
    }

    return {
      left: 0,
    };
  },
);

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
