import {evaluate} from 'mathjs';

import {Token, Type, isDecimal, isNumber, isOp, isEnd} from './types';
import {toMathable} from './tokenization';

export const reduce = (tokens: Token.Any[]): Token.Any[] => {
  let left: string = '';
  let op: string = '';
  let right: string = '';
  let remaining: Token.Op | undefined;

  const finish = (remaining: Token.Op | Token.End) => {
    const cutoff = tokens.indexOf(remaining);

    const value = evaluate(`${left}${op}${right}`).toString();
    const expression: Token.Number = {
      type: Type.Number,
      value,
    };

    const next: Token.Any[] = isEnd(remaining)
      ? [expression]
      : [expression, ...tokens.slice(cutoff)];

    return reduce(next);
  };

  for (const token of tokens) {
    if (isEnd(token)) {
      return finish({type: Type.End});
    }

    if (isOp(token) && !isDecimal(token)) {
      if (op && !remaining) {
        return finish(token);
      }

      op = toMathable(token);
    }

    if (isNumber(token) || isDecimal(token)) {
      const value = toMathable(token);

      if (op) {
        right += value;
      } else {
        left += value;
      }
    }
  }

  return tokens;
};
