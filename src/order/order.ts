import {useEffect} from 'react';

import {Id} from '../store';

const state: Id[] = [];

const useSubscribe = (id: Id) => {
  useEffect(() => {
    if (!state.includes(id)) {
      state.push(id);
    }
  }, []);
};

export const order = {
  useSubscribe,
  getPrevious: (id: Id): Id => {
    const index = state.indexOf(id);

    return state.at(index - 1)!; // -1 is last, that's okay we want cycles
  },
  getNext: (id: Id) => {
    const index = state.indexOf(id);

    const next = state.at(index + 1);

    return next ?? state[0];
  },
};
