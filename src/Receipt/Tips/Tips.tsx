import {FC, useCallback, useId} from 'react';

import {useStore} from '../../store';
import {Line} from '../Line';

import {Base} from './Base';

type Props = {
  percent: number;
  heading?: string;
};

export const Tips: FC<Props> = ({percent, heading}) => {
  const id = useId();

  const select = useStore(useCallback((state) => state.selectTips(id), [id]));

  const label = `${percent}%`;

  return (
    <Line divide={!!heading} heading={heading} label={label}>
      <Base identifier={id} select={select} percent={percent} readOnly />
    </Line>
  );
};
