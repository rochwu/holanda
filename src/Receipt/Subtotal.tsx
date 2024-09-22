import {FC} from 'react';

import {Ids} from '../store';

import {Field} from './Field';
import {Line} from './Line';

const id = Ids.Subtotal;

export const Subtotal: FC = () => {
  return (
    <Line name="subtotal" symbol="+">
      <Field identifier={id} order={1} />
    </Line>
  );
};
