import {FC, useCallback, useEffect, useId} from 'react';

import {Ids, useValue, useStore} from '../../store';
import {spacing} from '../../styles';
import {Field} from '../Field';
import {Line} from '../Line';

import {Base} from './Base';

type Props = {};

export const CustomTips: FC<Props> = () => {
  const id = useId();
  const percentId = useId();

  const total = useValue(Ids.LineTotal);
  const percent = useValue(percentId);
  const selectTips = useStore(
    useCallback((state) => state.selectTips(id), [id]),
  );

  const setValue = useStore(useCallback((state) => state.setValue(id), [id]));

  useEffect(() => {
    setValue((percent / 100) * total);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total, percent]);

  return (
    <Line label="???%">
      <Field
        identifier={percentId}
        onClick={selectTips}
        width={spacing.shortInput}
      />
      <Base identifier={id} percent={percent} />
    </Line>
  );
};
