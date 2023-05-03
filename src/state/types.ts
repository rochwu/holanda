import {OpType, Token} from '../types';

export type State = {
  tokens: Token.Any[];
  ops: OpType[];
  integers: number;
  fractions: number;
};
