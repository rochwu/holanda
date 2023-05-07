import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';

import {attributes} from '../attributes';
import {color, style} from '../styles';

const Component = styled.button(style.button, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  ':disabled': {
    cursor: 'not-allowed',
    backgroundColor: color.disabled.backgroundColor,
    color: color.disabled.color,
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
