import styled from '@emotion/styled';
import {FC} from 'react';
import {color} from './styles';
import {attributes} from './attributes';

type Props = {};

const Container = styled.div({
  display: 'grid',
  placeContent: 'center',
  height: '32px', // Some number I found after making sure all fields got at least 44
  backgroundColor: color.background,
});

export const Header: FC<Props> = () => {
  return <Container {...attributes.text}>{'🍗🧾💭🇳🇱💸'}</Container>;
};
