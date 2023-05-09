import {keyframes} from '@emotion/react';
import styled from '@emotion/styled';
import {FC, ReactNode} from 'react';

import {color, spacing} from '../../styles';

import {Base} from './Base';

export const Component = styled(Base)({
  backgroundColor: color.buttons.number.backgroundColor,
  height: '100%',
});

type Props = {children: ReactNode; selected: boolean} & Parameters<
  typeof Component
>[0];

const boxShadow = (props: {color: string}) =>
  `0 0 0 ${spacing.focus} ${props.color}`;

const fade = keyframes({
  '0%, 100%': {
    boxShadow: boxShadow({color: color.disabled.backgroundColor}),
  },
  '50%': {
    boxShadow: boxShadow({color: color.action}),
  },
});

const FocusRing = styled.div<{selected: boolean}>({}, ({selected}) => {
  if (selected) {
    return {
      borderRadius: spacing.borderRadius,
      animation: `${fade} 1s linear infinite`,
      zIndex: 1,
    };
  }
});

export const Selectable: FC<Props> = ({children, selected, ...props}) => {
  return (
    <FocusRing selected={selected}>
      <Component {...props}>{children}</Component>
    </FocusRing>
  );
};
