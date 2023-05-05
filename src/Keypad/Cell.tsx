import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';

const gray = (hex2: string) => {
  return `#${hex2.repeat(3)}`;
};

const Component = styled.button({
  display: 'grid',
  placeContent: 'center',
  fontSize: '1.5em',
  borderRadius: '8px',
  border: '1px solid black',
  cursor: 'pointer',
  ':disabled': {
    cursor: 'not-allowed',
    backgroundColor: gray('DD'),
    color: gray('C1'),
  },
});

type Props = {
  onClick: () => void;
  children: ReactNode;
} & Parameters<typeof Component>[0];

export const Cell: FC<Props> = ({children, onClick, ...props}) => {
  return (
    <Component {...props} onClick={onClick}>
      {children}
    </Component>
  );
};
