import {FC, useCallback, useEffect} from 'react';

import {Ids, useStore, useValue} from '../store';

import {Field} from './Field';
import {Line} from './Line';

const id = Ids.LineTotal;

export const LineTotal: FC = () => {
  const tax = useValue(Ids.Tax);
  const subtotal = useValue(Ids.Subtotal);
  const setValue = useStore(useCallback((state) => state.setValue(id), []));

  useEffect(() => {
    setValue(tax + subtotal);
  }, [tax, subtotal]);

  return (
    <Line name="line total" symbol="=">
      <Field identifier={id} />
    </Line>
  );
};
