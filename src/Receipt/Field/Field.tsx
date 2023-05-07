import {FC, useCallback, useId, useLayoutEffect} from 'react';

import {attributes} from '../../attributes';
import {Id, useStore} from '../../store';
import {reduce, stringify} from '../../tokens';

import {Selectable} from './Selectable';

type Props = {
  identifier?: Id;
};

const Editing: FC = () => {
  const tokens = useStore((state) => state.tokens);

  return <>{stringify.field(reduce(tokens)) || 0}</>;
};

export const Field: FC<Props> = ({identifier}) => {
  const defaultId = useId();
  const id: Id = identifier ?? defaultId;

  const select = useStore(useCallback((state) => state.select(id), [id]));
  const selected = useStore((state) => state.id === id);
  const value = useStore(useCallback((state) => state.byId[id] || 0, [id]));
  const set = useStore((state) => state.tokenize);

  useLayoutEffect(() => {
    if (selected) {
      set(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const click = () => {
    if (selected) {
      return;
    }

    select();
  };

  return (
    <Selectable selected={selected} onClick={click} {...attributes.input}>
      {selected ? <Editing /> : value}
    </Selectable>
  );
};
