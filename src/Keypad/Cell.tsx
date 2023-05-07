import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';

import {attributes} from '../attributes';

import {styles} from './constants';

const gray = (hex2: string) => {
  return `#${hex2.repeat(3)}`;
};

const Component = styled.button(styles.button, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  ':disabled': {
    cursor: 'not-allowed',
    backgroundColor: gray('DD'),
    color: gray('C1'),
  },
  padding: 0, // iOS pads 1em
});

type Props = {
  onClick: () => void;
  children: ReactNode;
} & Parameters<typeof Component>[0];

export const Cell: FC<Props> = ({children, onClick, ...props}) => {
  return (
    <Component {...props} onClick={onClick} {...attributes.input}>
      {children}
    </Component>
  );
};
