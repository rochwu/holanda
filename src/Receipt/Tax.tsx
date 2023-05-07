import {FC} from 'react';

import {Ids} from '../store';

import {Field} from './Field';
import {Line} from './Line';

type Props = {};

const id = Ids.Tax;

export const Tax: FC<Props> = () => {
  return (
    <Line label={id}>
      <Field identifier={id} />
    </Line>
  );
};
