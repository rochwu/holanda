import {Draft} from 'immer';
import {create} from 'zustand';
import {combine} from 'zustand/middleware';
import {immer} from 'zustand/middleware/immer';

import {isNumber, isOp} from '../is';
import {tokenize, tokenizer} from '../tokens';
import {Token} from '../types';

import {frontZero, previousToken} from './selectors';

export type State = {
  tokens: Token.Any[];
};

const initial: State = {
  tokens: [],
};

const pop = (state: Draft<State>) => {
  state.tokens.pop()!;
};

const pushNumber = (token: Token.Numeric) => (state: Draft<State>) => {
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

export const useInputState = create(
  immer(
    combine(initial, (set) => ({
      pushDot: () => {
        set((state) => {
          const dot = tokenizer.dot();

          const previous = previousToken(state);

          if (!isNumber(previous)) {
            pushNumber(tokenizer.zero())(state);
          }

          state.tokens.push(dot);
        });
      },
      pushOp: (token: Token.Op) => {
        set(pushOp(token));
      },
      pushNumber: (token: Token.Numeric) => {
        set(pushNumber(token));
      },
      pop: () => {
        set(pop);
      },
      reset: () => {
        set(initial);
      },
      set: (value = 0) => {
        set(() => {
          return {
            ...initial,
            tokens: tokenize.number(value),
          };
        });
      },
    })),
  ),
);
