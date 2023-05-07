import {FC, useCallback, useId} from 'react';

import {attributes} from '../../attributes';
import {Id, useStore} from '../../store';
import {reduce, stringify} from '../../tokens';

import {Base} from './Base';

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

  const value: number | undefined = useStore(
    useCallback((state) => state.byId[id] || 0, [id]),
  );
  const select = useStore(useCallback((state) => state.select(id), [id]));
  const selected = useStore((state) => state.id === id);

  const click = () => {
    if (selected) {
      return;
    }

    select();
  };

  return (
    <Base selected={selected} onClick={click} {...attributes.input}>
      {selected ? <Editing /> : value}
    </Base>
  );
};
