import {FC, useId} from 'react';

import {Field} from '../Field';
import {Line} from '../Line';

import {ReadOnly} from './ReadOnly';

type Props = {
  label?: string;
};

export const Item: FC<Props> = ({label}) => {
  const id = useId();

  return (
    <Line label={label ?? 'thing'}>
      <ReadOnly identifier={id} />
      <Field identifier={id} />
    </Line>
  );
};
