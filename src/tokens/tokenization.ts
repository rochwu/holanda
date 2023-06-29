import {isNumeric, isOp} from '../is';
import {precision} from '../precision';
import {Token} from '../types';

import {tokenizer} from './tokenizer';

import {symbols} from '.';

export const toToken = (single: string): Token.Any => {
  if (single === '.') {
    return tokenizer.dot();
  }

  return tokenizer.numeric(Number(single));
};

export const tokenize = {
  numeric: (value: number): Token.Any[] =>
    Array.from(precision(value).toString(), toToken),
};

export const toField = (token: Token.Any) => {
  if (isNumeric(token)) {
    return precision(token.value);
  }

  if (isOp(token)) {
    return symbols.field(token.op);
  }

  return '';
};

export const toMath = (token: Token.Any) => {
  if (isNumeric(token)) {
    return token.value.toString();
  }

  if (isOp(token)) {
    return symbols.math(token.op);
  }

  return '';
};

export const stringify = {
  math: (tokens: Token.Any[]) => tokens.map(toMath).join(''),
  field: (tokens: Token.Any[]) => tokens.map(toField).join(''),
};
