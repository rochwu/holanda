import {number} from 'mathjs';
import {math, input} from './sign';
import {OpType, Token, Type} from './types';

export const tokenizer = {
  number: (value: number): Token.Number => ({
    type: Type.Number,
    value,
  }),
  op: (op: OpType): Token.Op => ({
    type: Type.Op,
    op,
  }),
  decimal: (): Token.Decimal => ({
    type: Type.Op,
    op: OpType.Decimal,
  }),
  zero: (): Token.Number => tokenizer.number(0),
  end: (): Token.End => ({
    type: Type.End,
  }),
};

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
