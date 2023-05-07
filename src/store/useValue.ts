import {useCallback} from 'react';

import {Id, useStore} from './state';

export const useValue = (id: Id, defaultValue = 0) => {
  return useStore(
    useCallback((state) => state.byId[id] || defaultValue, [id, defaultValue]),
  );
};
