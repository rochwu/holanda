import {FC} from 'react';

import {lineTotal, useStore} from '../store';

import {ReadOnly} from './Field';
import {Line} from './Line';

type Props = {};

export const LineTotal: FC<Props> = () => {
  const value = useStore(lineTotal);

  return (
    <Line label="line total">
      <ReadOnly value={value} />
    </Line>
  );
};
