import {FC, useCallback, useId, useLayoutEffect} from 'react';

import {useStore, useValue} from '../../store';
import {spacing} from '../../styles';
import {Field} from '../Field';
import {Line} from '../Line';

import {Base} from './Base';

type Props = {};

export const CustomTips: FC<Props> = () => {
  const id = useId();
  const percentId = useId();

  const percent = useValue(percentId);
  const selected = useStore((state) => state.tips === id);

  const tip = useStore(useCallback((state) => state.tip(id), [id]));

  const select = () => {
    tip(percent);
  };

  useLayoutEffect(() => {
    if (selected) {
      select();
    }
  }, [selected, percent]);

  return (
    <Line label="???%">
      <Field
        identifier={percentId}
        onClick={select}
        width={spacing.shortInput}
      />
      <Base identifier={id} percent={percent} />
    </Line>
  );
};
