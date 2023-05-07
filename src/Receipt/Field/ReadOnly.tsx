import styled from '@emotion/styled';
import {FC} from 'react';

import {style} from '../../styles';

import {Base} from './Base';

type Props = {
  value: number;
} & Parameters<typeof Base>[0];

const Component = styled(Base)(style.disabled);

export const ReadOnly: FC<Props> = ({value, ...props}) => {
  return <Component {...props}>{value}</Component>;
};
