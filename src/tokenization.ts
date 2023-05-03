import {number} from 'mathjs';
import {math, input} from './sign';
import {OpType, Token, Type} from './types';

export const toToken = (numeric: string): Token.Any => {
  if (numeric === '.') {
    return {type: Type.Op, op: OpType.Decimal};
  }

  return {type: Type.Number, value: number(numeric)};
};

export const tokenize = (value: number) => {
  const stringified = value.toString().split('');

  return stringified.map(toToken);
};

export const toString = (token: Token.Any) => {
  switch (token.type) {
    case Type.Number: {
      return token.value.toString();
    }
    case Type.Op: {
      return input(token.op);
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
      return math(token.op);
    }
  }

  return '';
};

export const mathfy = (tokens: Token.Any[]) => {
  return tokens.map(toMathable).join('');
};
