import {OpType, Token, Type} from '../../types';

export const tokenize = (op: OpType): Token.Op => ({
  type: Type.Op,
  op,
});

export const zero = (): Token.Number => ({
  type: Type.Number,
  value: 0,
});
