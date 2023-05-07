import {FC, useCallback, useLayoutEffect} from 'react';

import {attributes} from '../../attributes';
import {Id, useStore} from '../../store';
import {reduce, stringify} from '../../tokens';
import {useIdentifier} from '../../useIdentifier';

import {Base} from './Base';
import {Selectable} from './Selectable';
import {Type} from './types';

type Props = {
  identifier?: Id;
  type?: Type;
} & Parameters<typeof Base>[0];

const Editing: FC = () => {
  const tokens = useStore((state) => state.tokens);

  return <>{stringify.field(reduce(tokens)) || 0}</>;
};

export const Field: FC<Props> = ({identifier, type, onClick, ...props}) => {
  const id = useIdentifier(identifier);

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

  const click: typeof onClick = (event) => {
    onClick?.(event);

    if (selected) {
      return;
    }

    select();
  };

  return (
    <Selectable
      type={type}
      selected={selected}
      onClick={click}
      {...attributes.input}
      {...props}
    >
      {selected ? <Editing /> : value}
    </Selectable>
  );
};
