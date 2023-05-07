import {useId} from 'react';

import {Id} from './store';

export const useIdentifier = (identifier?: Id): Id => {
  const defaultId = useId();
  const id: Id = identifier ?? defaultId;

  return id;
};
