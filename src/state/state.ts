import {create} from 'zustand';
import {combine} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

import {Draft} from 'immer';

import {Token, isDecimal, isOp, isNumber, OpType} from '../types';

type State = {
  tokens: Token.Any[];
  decimal: {
    length: number;
  };
  ops: OpType[];
  numbers: number;
};

const initial: State = {
  tokens: [],
  decimal: {
    length: 0,
  },
  ops: [],
  numbers: 0,
};

const clearDecimal = (state: Draft<State>) => {
  state.decimal.length = 0;
};

const pop = (state: Draft<State>) => {
  if (state.tokens.length === 0) {
    return;
  }

  const token = state.tokens.pop()!;

  if (isNumber(token)) {
    state.numbers -= 1;

    if (state.ops.at(-1) === OpType.Decimal) {
      state.decimal.length -= 1;
    }
  }

  if (isOp(token)) {
    if (isDecimal(token)) {
      clearDecimal(state);
    }

    state.ops.pop();
  }
};

export const frontZero = (state: State): boolean => {
  const previous = state.tokens.at(-1);

  return isNumber(previous) && previous.value === 0 && state.numbers === 1;
};

export const enoughCents = ({decimal}: State): boolean => {
  return decimal.length === 2;
};

export const enoughDots = (state: State) => {
  if (state.ops.at(-1) === OpType.Decimal) {
    return true;
  }

  if (isOp(state.tokens.at(-1))) {
    if (state.ops.at(-2) === OpType.Decimal) {
      return true;
    }
  }

  return false;
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
          state.numbers = 0;

          clearDecimal(state);
        });
      },
      pushNumber: (token: Token.Number) => {
        set((state) => {
          if (frontZero(state)) {
            pop(state);
          }

          state.tokens.push(token);

          state.numbers += 1;

          if (state.ops.at(-1) === OpType.Decimal) {
            state.decimal.length += 1;
          }
        });
      },
      pop: () => {
        set(pop);
      },
      reset: () => {
        set(initial);
      },
    })),
  ),
);
