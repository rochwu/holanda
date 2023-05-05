import {number as mathJsNumber} from 'mathjs';
import {symbols} from '.';
import {Token} from '../types';
import {tokenizer} from './tokenizer';
import {isNumber, isOp} from '../is';

export const toToken = (numeric: string): Token.Any => {
  if (numeric === '.') {
    return tokenizer.dot();
  }

  return tokenizer.number(mathJsNumber(numeric));
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
