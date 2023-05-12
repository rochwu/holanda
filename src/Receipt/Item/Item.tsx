import {FC, useId} from 'react';

import {Field} from '../Field';
import {Final} from '../Final';
import {Line} from '../Line';

import {useCost} from './useCost';

export const Item: FC = () => {
  const id = useId();

  const cost = useCost(id);

  return (
    <Line name="thing">
      <Final cost={cost} />
      <Field identifier={id} />
    </Line>
  );
};
