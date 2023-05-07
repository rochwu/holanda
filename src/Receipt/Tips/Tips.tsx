import {FC} from 'react';

import {precision} from '../../precision';
import {lineTotal, useStore} from '../../store';
import {ReadOnly} from '../Field/ReadOnly';
import {Line} from '../Line';

type Props = {
  label?: string;
  percent?: number;
  readOnly?: boolean;
};

export const Tips: FC<Props> = (props) => {
  const total = useStore(lineTotal);

  const label = props.label ?? `${props.percent}% tips`;

  const percent = (props.percent || 100) / 100;

  const value = precision(total * percent);

  return (
    <Line label={label}>
      <ReadOnly value={value} />
    </Line>
  );
};
