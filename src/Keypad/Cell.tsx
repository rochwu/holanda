import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';

import {style} from '../styles';

const Component = styled.button(style.button, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: 0, // iOS pads 1em
});

type Props = {
  onClick: () => void;
  children: ReactNode;
} & Parameters<typeof Component>[0];

export const Cell: FC<Props> = ({children, ...elementProps}) => {
  return <Component {...elementProps}>{children}</Component>;
};
