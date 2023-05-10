import {FC, useCallback, useLayoutEffect} from 'react';

import {attributes} from '../../attributes';
import {Id, useStore, useValue} from '../../store';
import {useIdentifier} from '../../useIdentifier';

import {order} from '../../order';

import {Base} from './Base';
import {Selectable} from './Selectable';
import {Editing} from './Editing';

type Props = {
  identifier?: Id;
} & Parameters<typeof Base>[0];

export const Field: FC<Props> = ({identifier, onClick, ...props}) => {
  const id = useIdentifier(identifier);

  const select = useStore(useCallback((state) => state.select(id), [id]));
  const selected = useStore((state) => state.id === id);
  const value = useValue(id);
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

  order.useSubscribe(id);

  return (
    <Selectable
      selected={selected}
      onClick={click}
      {...attributes.input}
      {...attributes.text}
      {...props}
    >
      {selected ? <Editing /> : value}
    </Selectable>
  );
};
