import {FC, useCallback} from 'react';

import {precision} from '../../precision';
import {Id, Ids, useStore, useValue} from '../../store';
import {spacing} from '../../styles';
import {ReadOnly} from '../Field';
import {Radio} from '../Radio';

type Props = {
  identifier: Id;
  percent: number;
};

// Split this as an attempt on performance
export const Base: FC<Props> = ({identifier: id, percent}) => {
  const total = useValue(Ids.LineTotal);
  const selected = useStore((state) => state.tips === id);
  const tip = useStore(useCallback((state) => state.tip(id), [id]));

  const value = precision(total * (percent / 100));

  const select = () => {
    tip(percent);
  };

  return (
    <>
      <Radio onClick={select} selected={selected} />
      <ReadOnly onClick={select} value={value} width={spacing.shortInput} />
    </>
  );
};
