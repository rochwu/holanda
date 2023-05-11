import {FC, useCallback} from 'react';

import {attributes} from '../../attributes';
import {order} from '../../order';
import {Id, useStore, useValue} from '../../store';
import {useIdentifier} from '../../useIdentifier';

import {Base} from './Base';
import {Editing} from './Editing';
import {Selectable} from './Selectable';

type Props = {
  identifier?: Id;
} & Parameters<typeof Base>[0];

export const Field: FC<Props> = ({identifier, onClick, ...props}) => {
  const id = useIdentifier(identifier);

  const select = useStore(useCallback((state) => state.select(id), [id]));
  const selected = useStore((state) => state.id === id);
  const value = useValue(id);

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
      {...attributes.text}
      {...props}
    >
      {selected ? <Editing /> : value}
    </Selectable>
  );
};
