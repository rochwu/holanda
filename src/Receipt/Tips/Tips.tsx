import {FC, useCallback, useId} from 'react';

import {useStore} from '../../store';
import {Line} from '../Line';

import {Base} from './Base';

type Props = {
  percent: number;
};

export const Tips: FC<Props> = ({percent}) => {
  const id = useId();

  const select = useStore(useCallback((state) => state.selectTips(id), [id]));

  const label = `${percent}% tips`;

  return (
    <Line label={label}>
      <Base identifier={id} select={select} percent={percent} readOnly />
    </Line>
  );
};
