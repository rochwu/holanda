import {OpType, Token, Type} from '../types';

export const tokenizer = {
  numeric: (value: number): Token.Numeric => ({
    type: Type.Numeric,
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
  zero: (): Token.Numeric => tokenizer.numeric(0),
  end: (): Token.End => ({
    type: Type.End,
  }),
};
