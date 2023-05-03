import styled from '@emotion/styled';
import {FC} from 'react';
import {Keypad} from './Keypad';
import {Receipt} from './Receipt';

const Container = styled.div({
  display: 'grid',
  width: '390px', // my phone
  height: '844px',
  gridAutoRows: '1fr',
  backgroundColor: 'white',
});

export const App: FC = () => {
  return (
    <Container>
      <Receipt />
      <Keypad />
    </Container>
  );
};
