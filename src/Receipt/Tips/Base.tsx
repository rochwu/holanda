import {FC, useCallback} from 'react';

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

  const value = total * (percent / 100);

  return (
    <>
      <Radio aria-label={`tip ${percent}%`} onClick={tip} selected={selected} />
      <ReadOnly onClick={tip} value={value} width={spacing.shortInput} />
    </>
  );
};
