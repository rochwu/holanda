import styled from '@emotion/styled';
import {FC, useLayoutEffect} from 'react';

import {Ids, useStore, useValue} from '../store';

import {Field} from './Field';
import {Line} from './Line';

type Props = {};

const Component = styled(Line)({});

const id = Ids.Total;

const System: FC = () => {
  const value = useValue(id);
  const set = useStore((state) => state.tokenize);
  const selected = useStore((state) => state.id === id);

  useLayoutEffect(() => {
    if (selected) {
      // When total is selected and tips are being changed
      set(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return null;
};

export const Total: FC<Props> = () => {
  return (
    <>
      <Component label="total">
        <Field identifier={id} />
      </Component>
      <System />
    </>
  );
};
