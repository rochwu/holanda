import styled from '@emotion/styled';
import {FC} from 'react';

import {Ids} from '../store';

import {Field} from './Field';
import {Line} from './Line';

type Props = {};

const Component = styled(Line)({});

const id = Ids.Total;

export const Total: FC<Props> = () => {
  return (
    <Component label={id}>
      <Field identifier={id} />
    </Component>
  );
};
