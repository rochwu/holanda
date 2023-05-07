import {isDot, isNumeric, isOp, isZero} from '../is';
import {stringify} from '../tokens';

import type {State} from './state';

export const previousToken = (state: State, look = 1) => {
  return state.tokens.at(look * -1);
};

export const previousOp = (state: State, look = 1) => {
  const ops = state.tokens.filter(isOp);

  return ops.at(look * -1);
};

export const frontZero = (state: State): boolean => {
  const previous = previousToken(state);

  if (!isZero(previous)) {
    return false;
  }

  const beforePrevious = previousToken(state, 2);

  if (!beforePrevious) {
    return true;
  }

  if (isDot(beforePrevious)) {
    return false;
  }

  return !isNumeric(beforePrevious);
};

export const enoughCents = (state: State): boolean => {
  return !!stringify.math(state.tokens).match(/\.\d\d$/); // .##
};

export const enoughDots = (state: State) => {
  const previous = previousOp(state);

  return isDot(previous);
};

export const lineTotal = (state: State): number => {
  const subtotal = state.byId['subtotal'] || 0;
  const tax = state.byId['tax'] || 0;

  return subtotal + tax;
};
