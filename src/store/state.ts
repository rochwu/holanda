import {Draft} from 'immer';
import {evaluate} from 'mathjs';
import {create} from 'zustand';
import {combine} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

import {isNumeric, isOp} from '../is';
import {reduce, stringify, tokenize, tokenizer} from '../tokens';
import {Token} from '../types';

import {frontZero, lineTotal, previousToken} from './selectors';

export type Id = string;

export type State = {
  tokens: Token.Any[];
  byId: Record<Id, number>;
  id: Id;
  tips?: Id;
  lefty: boolean;
};

const initial: State = {
  tokens: [],
  byId: {},
  id: 'subtotal',
  lefty: false,
  tips: undefined, // reset wasn't working without this
};

const pop = (state: Draft<State>) => {
  state.tokens.pop();
};

const pushNumeric = (token: Token.Numeric) => (state: Draft<State>) => {
  if (frontZero(state)) {
    pop(state);
  }

  state.tokens.push(token);
};

const pushOp = (token: Token.Op) => (state: Draft<State>) => {
  const previous = previousToken(state);

  if (isOp(previous)) {
    pop(state);
  }

  state.tokens.push(token);
};

const tally = (state: Draft<State>) => {
  const {id, tokens} = state;

  if (id === undefined) {
    return;
  }

  const previous = state.byId[id];

  const raw = tokens.length > 0 ? stringify.math(reduce(tokens)) : undefined;

  let total = 0;
  if (raw) {
    total = evaluate(raw.replace(/\D+$/, ''));
  }

  if (previous === undefined && total === 0) {
    return;
  }

  state.byId[id] = total;
};

export const useStore = create(
  immer(
    combine(initial, (set, get, store) => ({
      pushDot: () => {
        set((state) => {
          const dot = tokenizer.dot();

          const previous = previousToken(state);

          if (!isNumeric(previous)) {
            pushNumeric(tokenizer.zero())(state);
          }

          state.tokens.push(dot);
        });
      },
      pushOp: (token: Token.Op) => {
        set(pushOp(token));
      },
      pushNumeric: (token: Token.Numeric) => {
        set(pushNumeric(token));
      },
      pop: () => {
        set(pop);
      },
      reset: () => {
        set(initial);
      },
      /**
       * Basically a blur then a focus
       */
      select: (id: Id) => () => {
        set((state) => {
          tally(state);

          const saved = state.byId[id];

          if (saved) {
            state.tokens = tokenize.numeric(saved);
          } else {
            state.tokens = initial.tokens;
          }

          state.id = id;
        });
      },
      tokenize: (value: number) => {
        set((state) => {
          state.tokens = tokenize.numeric(value);
        });
      },
      clear: () => {
        set((state) => {
          state.tokens = [];
        });
      },
      tally: () => {
        set(tally);
      },
      flip: () => {
        set((state) => {
          state.lefty = !state.lefty;
        });
      },
      selectTips: (id: Id) => () => {
        set((state) => {
          state.tips = id;
        });
      },
      tip: (tips: number) => {
        set((state) => {
          const total = lineTotal(state) + tips;

          state.byId['total'] = total;
        });
      },
    })),
  ),
);
