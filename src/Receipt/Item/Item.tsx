import {FC, useId} from 'react';

import {Field} from '../Field';
import {Line} from '../Line';

import {Final} from './Final';

type Props = {
  label?: string;
};

export const Item: FC<Props> = ({label}) => {
  const id = useId();

  return (
    <Line label={label ?? 'thing'}>
      <Final identifier={id} />
      <Field identifier={id} />
    </Line>
  );
};
