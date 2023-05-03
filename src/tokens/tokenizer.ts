import {OpType, Token, Type} from '../types';

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
