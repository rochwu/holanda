import {FC, useEffect} from 'react';

import {precision} from '../../precision';
import {Id, Ids, useStore, useValue} from '../../store';
import {spacing} from '../../styles';
import {Field} from '../Field';
import {ReadOnly} from '../Field';
import {Radio} from '../Radio';

type Props = {
  identifier: Id;
  select: () => void;
  percent: number;
  readOnly?: boolean;
};

// Split this as an attempt on performance
export const Base: FC<Props> = ({
  identifier: id,
  readOnly,
  select,
  percent,
}) => {
  const total = useValue(Ids.LineTotal);
  const selected = useStore((state) => state.tips === id);
  const tip = useStore((state) => state.tip);

  const value = precision(total * (percent / 100));

  useEffect(() => {
    if (selected) {
      tip(percent);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [percent, selected, total]);

  return (
    <>
      <Radio onClick={select} selected={selected} />
      {readOnly ? (
        <ReadOnly onClick={select} value={value} width={spacing.shortInput} />
      ) : (
        <Field identifier={id} onClick={select} width={spacing.shortInput} />
      )}
    </>
  );
};
