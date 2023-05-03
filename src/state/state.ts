import {create} from 'zustand';
import {combine} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

import {Draft} from 'immer';

import {Token, isDecimal, isOp, isNumber, OpType} from '../types';
import {tokenize} from '../tokenization';

type State = {
  tokens: Token.Any[];
  ops: OpType[];
  integers: number;
  fractions: number;
};

const initial: State = {
  tokens: [],
  ops: [],
  integers: 0,
  fractions: 0,
};

export const frontZero = (state: State): boolean => {
  const previous = state.tokens.at(-1);

  return isNumber(previous) && previous.value === 0 && state.integers === 1;
};

export const enoughCents = ({fractions}: State): boolean => {
  return fractions === 2;
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
          state.integers = 0;
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
        set((state) => {
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
