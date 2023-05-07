import {FC, useCallback, useEffect, useId} from 'react';

import {Ids, useStore} from '../../store';
import {Field} from '../Field';
import {Type} from '../Field/types';
import {Line} from '../Line';

import {Base} from './Base';

type Props = {};

export const CustomTips: FC<Props> = () => {
  const numberId = useId();
  const percentId = useId();

  const total = useStore((state) => state.byId[Ids.LineTotal]);
  const percent = useStore((state) => state.byId[percentId]);
  const selectTips = useStore(
    useCallback((state) => state.selectTips(numberId), [numberId]),
  );
  const selectId = useStore(
    useCallback((state) => state.select(percentId), [percentId]),
  );
  const setValue = useStore(
    useCallback((state) => state.setValue(numberId), [numberId]),
  );

  useEffect(() => {
    setValue((percent / 100) * total);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, percent]);

  const select = () => {
    selectId();
    selectTips();
  };

  return (
    <Line label="custom tips">
      <Field identifier={percentId} type={Type.Percent} onClick={select} />
      <Base identifier={numberId} select={select} percent={percent} />
    </Line>
  );
};
