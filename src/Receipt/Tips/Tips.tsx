import {FC, useId} from 'react';

import {Line} from '../Line';

import {Base} from './Base';

type Props = {
  percent: number;
  heading?: string;
};

export const Tips: FC<Props> = ({percent, heading}) => {
  const id = useId();

  const label = `${percent}%`;

  return (
    <Line divide={!!heading} heading={heading} label={label}>
      <Base identifier={id} percent={percent} />
    </Line>
  );
};
