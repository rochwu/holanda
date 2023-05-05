import {OpType, Token, Type} from '../types';

export const tokenizer = {
  number: (value: number): Token.Numeric => ({
    type: Type.Number,
    value,
  }),
  op: (op: OpType): Token.Op => ({
    type: Type.Op,
    op,
  }),
  dot: (): Token.Dot => ({
    type: Type.Op,
    op: OpType.Dot,
  }),
  zero: (): Token.Numeric => tokenizer.number(0),
  end: (): Token.End => ({
    type: Type.End,
  }),
};
