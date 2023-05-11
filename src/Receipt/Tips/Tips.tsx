import {FC, useCallback, useEffect, useId} from 'react';

import {useStore} from '../../store';
import {Line} from '../Line';

import {Base} from './Base';

type Props = {
  percent: number;
  heading?: string;
};

export const Tips: FC<Props> = ({percent, heading}) => {
  const id = useId();

  const setValue = useStore(useCallback((state) => state.setValue(id), [id]));

  const label = `${percent}%`;

  useEffect(() => {
    setValue(percent);
  }, [percent]);

  return (
    <Line heading={heading} label={label}>
      <Base identifier={id} percent={percent} />
    </Line>
  );
};
