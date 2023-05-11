import {FC} from 'react';

import {Ids} from '../store';

import {Field} from './Field';
import {Line} from './Line';

const id = Ids.Tax;

export const Tax: FC = () => {
  return (
    <Line label={id}>
      <Field identifier={id} />
    </Line>
  );
};
