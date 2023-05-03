import {OpType, isNumber, isOp} from '../types';
import {State} from './types';

export const previousToken = (state: State) => {
  return state.tokens.at(-1);
};

export const frontZero = (state: State): boolean => {
  const previous = previousToken(state);

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

export const shouldPad = (state: State) => {
  const previous = previousToken(state);

  return !isNumber(previous);
};
