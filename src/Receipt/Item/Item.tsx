import {FC, useId} from 'react';

import {Field} from '../Field';
import {Final} from '../Final';
import {Line} from '../Line';

import {useCost} from './useCost';

export const Item: FC = () => {
  const id = useId();

  const cost = useCost(id);

  return (
    <Line name="mine">
      <Final cost={cost} />
      <Field identifier={id} order={3} />
    </Line>
  );
};
