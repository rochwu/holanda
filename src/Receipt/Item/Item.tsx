import {FC, useId} from 'react';

import {Field} from '../Field';
import {Final} from '../Final';
import {Line} from '../Line';

import {useCost} from './useCost';

type Props = {
  label?: string;
};

export const Item: FC<Props> = ({label}) => {
  const id = useId();

  const cost = useCost(id);

  return (
    <Line label={label ?? 'thing'}>
      <Final cost={cost} />
      <Field identifier={id} />
    </Line>
  );
};
