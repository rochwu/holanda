import styled from '@emotion/styled';
import {FC} from 'react';

import {style} from '../../styles';

import {Base} from './Base';

type Props = {
  value: number;
};

const Component = styled(Base)(style.disabled);

export const ReadOnly: FC<Props> = ({value}) => {
  return <Component>{value}</Component>;
};
