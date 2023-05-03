import styled from '@emotion/styled';
import {FC} from 'react';
import {reduce, stringify} from '../tokens';
import {useStore} from '../state';
import {Field} from './Field';

const Container = styled.div({
  gridRow: '1 / 3',
});

export const Receipt: FC = () => {
  const tokens = useStore((state) => state.tokens);

  const change = () => {};

  return (
    <Container>
      <Field onChange={change} />
      <Field value={420.69} onChange={change} />
      {stringify(tokens)}
      {JSON.stringify(reduce(tokens), null, 2)}
    </Container>
  );
};
