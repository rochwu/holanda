import styled from '@emotion/styled';
import {FC} from 'react';
import {color, spacing} from './styles';

type Props = {};

const Container = styled.div({
  display: 'grid',
  placeContent: 'center',
  height: '32px',
  backgroundColor: color.background,
});

export const Header: FC<Props> = () => {
  return <Container>{'🍗🤔🇳🇱💸'}</Container>;
};
