import {FC, useCallback, useEffect, useId} from 'react';

import {precision} from '../../precision';
import {Id, lineTotal, useStore} from '../../store';
import {ReadOnly} from '../Field/ReadOnly';
import {Line} from '../Line';
import {Radio} from '../Radio';

type Props = {
  label?: string;
  percent?: number;
  readOnly?: boolean;
};

type ComponentProps = {
  identifier: Id;
  select: () => void;
} & Pick<Props, 'percent'>;

const noop = () => {
  //
};

// Split this as an attempt on performance
const Component: FC<ComponentProps> = ({identifier: id, ...props}) => {
  const total = useStore(lineTotal);
  const selected = useStore((state) => state.tips === id);
  const tip = useStore((state) => state.tip);
  const select = useCallback(selected ? noop : props.select, [selected]);

  const percent = (props.percent || 100) / 100;

  const value = precision(total * percent);

  useEffect(() => {
    if (selected) {
      tip(value);
    }
  }, [value, selected, tip]);

  return (
    <>
      <Radio onClick={select} selected={selected} />
      <ReadOnly onClick={select} value={value} />
    </>
  );
};

export const Tips: FC<Props> = (props) => {
  const id = useId();

  const select = useStore(useCallback((state) => state.selectTips(id), [id]));

  const label = props.label ?? `${props.percent}% tips`;

  return (
    <Line label={label}>
      <Component {...props} identifier={id} select={select} />
    </Line>
  );
};
