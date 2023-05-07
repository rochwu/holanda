import {FC, useCallback, useEffect} from 'react';

import {Ids, useStore, useValue} from '../store';

import {Field} from './Field';
import {Line} from './Line';

type Props = {};

const id = Ids.LineTotal;

export const LineTotal: FC<Props> = () => {
  const tax = useValue(Ids.Tax);
  const subtotal = useValue(Ids.Subtotal);
  const setValue = useStore(useCallback((state) => state.setValue(id), []));

  useEffect(() => {
    setValue(tax + subtotal);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tax, subtotal]);

  return (
    <Line label={id}>
      <Field identifier={id} />
    </Line>
  );
};
