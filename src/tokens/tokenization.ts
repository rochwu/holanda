import {number} from 'mathjs';
import {symbols} from '.';
import {Token, Type} from '../types';
import {tokenizer} from './tokenizer';

export const toToken = (numeric: string): Token.Any => {
  if (numeric === '.') {
    return tokenizer.decimal();
  }

  return tokenizer.number(number(numeric));
};

export const tokenize = (value: number): Token.Any[] => {
  const stringified = value.toString().split('');

  return stringified.map(toToken);
};

export const toString = (token: Token.Any) => {
  switch (token.type) {
    case Type.Number: {
      return token.value.toString();
    }
    case Type.Op: {
      return symbols.field(token.op);
    }
  }

  return '';
};

export const stringify = (tokens: Token.Any[]) => {
  return tokens.map(toString).join('');
};

export const toMathable = (token: Token.Any) => {
  switch (token.type) {
    case Type.Number: {
      return token.value.toString();
    }
    case Type.Op: {
      return symbols.math(token.op);
    }
  }

  return '';
};
