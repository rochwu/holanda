import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';

import {attributes} from '../attributes';
import {color, spacing} from '../styles';

import {Cell} from './Cell';

const Container = styled(Cell)({
  display: 'flex',
  alignItems: 'center',
  fontSize: spacing.label,
  textTransform: 'uppercase',
  color: color.backgroundText,
  gap: spacing.focus,
});

type Props = {name: ReactNode; symbol?: ReactNode};

export const Label: FC<Props> = ({name, symbol}) => {
  return (
    <Container>
      <span>{symbol}</span>
      <span {...attributes.text}>{name}</span>
    </Container>
  );
};
