import styled from '@emotion/styled';
import {FC} from 'react';
import {reduce} from '../reduce';
import {useStore} from '../state';
import {stringify} from '../tokenization';
import {Input} from './Input';

const Container = styled.div({
  gridRow: '1 / 3',
});

export const Receipt: FC = () => {
  const tokens = useStore((state) => state.tokens);

  return (
    <Container>
      <Input />
      {stringify(tokens)}
      {JSON.stringify(reduce(tokens), null, 2)}
    </Container>
  );
};
