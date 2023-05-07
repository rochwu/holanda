import {FC, useCallback, useEffect, useId} from 'react';

import {precision} from '../../precision';
import {lineTotal, useStore} from '../../store';
import {ReadOnly} from '../Field/ReadOnly';
import {Line} from '../Line';
import {Radio} from '../Radio';

type Props = {
  label?: string;
  percent?: number;
  readOnly?: boolean;
};

export const Tips: FC<Props> = (props) => {
  const id = useId();

  const total = useStore(lineTotal);
  const selected = useStore((state) => state.tips === id);
  const set = useStore(useCallback((state) => state.tip(id), [id]));

  const label = props.label ?? `${props.percent}% tips`;

  const percent = (props.percent || 100) / 100;

  const value = precision(total * percent);

  useEffect(() => {
    if (selected) {
      set(value);
    }
  }, [value, selected, set]);

  const click = () => {
    set(value);
  };

  return (
    <Line label={label}>
      <Radio onClick={click} selected={selected} />
      <ReadOnly value={value} />
    </Line>
  );
};
