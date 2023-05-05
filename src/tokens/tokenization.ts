import {isNumber, isOp} from '../is';
import {Token} from '../types';

import {tokenizer} from './tokenizer';

import {symbols} from '.';

export const toToken = (single: string): Token.Any => {
  if (single === '.') {
    return tokenizer.dot();
  }

  return tokenizer.number(Number(single));
};

export const tokenize = {
  number: (value: number): Token.Any[] => Array.from(value.toString(), toToken),
};

export const toField = (token: Token.Any) => {
  if (isNumber(token)) {
    return token.value.toString();
  }

  if (isOp(token)) {
    return symbols.field(token.op);
  }

  return '';
};

export const toMath = (token: Token.Any) => {
  if (isNumber(token)) {
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
