import styled from '@emotion/styled';
import {FC, useCallback, useLayoutEffect, useMemo} from 'react';

import {Ids, useStore, useValue} from '../store';

import {Field} from './Field';
import {Final} from './Final';
import {Line} from './Line';

const Component = styled(Line)({});

const id = Ids.Total;

const System: FC = () => {
  const tips = useStore((state) => {
    const selected = state.tips;

    if (selected) {
      return state.byId[selected] || 0;
    }

    return 0;
  });
  const lineTotal = useValue(Ids.LineTotal);

  const total = useMemo(() => {
    return lineTotal * (tips / 100 + 1);
  }, [lineTotal, tips]);

  const selected = useStore((state) => state.id === id);

  const set = useStore((state) => state.tokenize);
  const setValue = useStore(useCallback((state) => state.setValue(id), [id]));

  useLayoutEffect(() => {
    if (selected) {
      // When total is selected and tips are being changed
      set(total);
    } else {
      setValue(total);
    }
  }, [total]);

  return null;
};

const Value: FC = () => {
  const total = useValue(Ids.Total);

  return <Final cost={total} />;
};

export const Total: FC = () => {
  return (
    <>
      <Component name="total" symbol="=">
        <Value />
        <Field identifier={id} />
      </Component>
      <System />
    </>
  );
};
