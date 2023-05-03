import {create} from 'zustand';
import {combine} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

import {Draft} from 'immer';

import {Token, isDecimal, isOp, isNumber, OpType} from '../types';
import {tokenize} from '../tokens';
import {State} from './types';
import {frontZero} from './selectors';

const initial: State = {
  tokens: [],
  ops: [],
  integers: 0,
  fractions: 0,
};

const tallyNumeric = (state: Draft<State>, change: number) => {
  if (state.ops.at(-1) === OpType.Decimal) {
    state.fractions += change;
  } else {
    state.integers += change;
  }
};

const pop = (state: Draft<State>) => {
  if (state.tokens.length === 0) {
    return;
  }

  const token = state.tokens.pop()!;

  if (isNumber(token)) {
    tallyNumeric(state, -1);
  }

  if (isOp(token)) {
    if (isDecimal(token)) {
      state.fractions = 0;
    }

    state.ops.pop();
  }
};

export const useStore = create(
  immer(
    combine(initial, (set, _get, _store) => ({
      pushOp: (token: Token.Op) => {
        set((state) => {
          const previous = state.tokens.at(-1);

          if (isOp(previous)) {
            pop(state);
          }

          state.tokens.push(token);

          state.ops.push(token.op);
          state.integers = 0; // TODO: there should be a bug somewhere about flipping ops and decimals
          state.fractions = 0;
        });
      },
      pushNumber: (token: Token.Number) => {
        set((state) => {
          if (frontZero(state)) {
            pop(state);
          }

          state.tokens.push(token);

          tallyNumeric(state, 1);
        });
      },
      pop: () => {
        set(pop);
      },
      reset: () => {
        set(initial);
      },
      set: (value: number = 0) => {
        set(() => {
          const {1: integer, 2: fraction} = value
            .toString()
            .match(/^(\d+)(?:\.(\d+))?/)!;

          return {
            ...initial,
            tokens: tokenize(value),
            integers: integer.length,
            fractions: fraction?.length ?? 0,
          };
        });
      },
    })),
  ),
);
