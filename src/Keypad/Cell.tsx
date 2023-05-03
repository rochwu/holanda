import {FC} from 'react';

import styled from '@emotion/styled';

const gray = (hex2: string) => {
  return `#${hex2.repeat(3)}`;
};

const Component = styled.button({
  display: 'grid',
  placeItems: 'center',
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
  label: string;
} & Parameters<typeof Component>[0];

export const Cell: FC<Props> = ({label, onClick, ...props}) => {
  return (
    <Component {...props} onClick={onClick}>
      {label}
    </Component>
  );
};
