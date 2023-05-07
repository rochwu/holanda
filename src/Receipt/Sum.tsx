import {FC} from 'react';

import {Id} from '../store';

import {Field} from './Field';
import {Line} from './Line';

type Props = {
  identifier: Id;
  label?: string;
};

export const Sum: FC<Props> = ({identifier: id, label}) => {
  return (
    <Line label={label ?? id}>
      <Field identifier={id} />
    </Line>
  );
};
