import {isDot, isNumeric, isOp, isEnd} from '../is';
import {evaluate} from '../math';
import {precision} from '../precision';
import {Token} from '../types';

import {toMath} from './tokenization';
import {tokenizer} from './tokenizer';

const total = (value: string): number => {
  try {
    const answer: number = evaluate(value);
    return precision(answer);
  } catch (e) {
    console.error('❌ Something fucked up at in total');
    throw e;
  }
};

export const reduce = (tokens: Token.Any[]): Token.Any[] => {
  let left = '';
  let op = '';
  let right = '';
  let remaining: Token.Op | undefined;

  const finish = (remaining: Token.Op | Token.End) => {
    const cutoff = tokens.indexOf(remaining);

    const value = total(`${left}${op}${right}`);
    const expression = tokenizer.numeric(value);

    const next: Token.Any[] = isEnd(remaining)
      ? [expression]
      : [expression, ...tokens.slice(cutoff)];

    return reduce(next);
  };

  for (const token of tokens) {
    if (isEnd(token)) {
      // TODO: I don't think I ever push End anywhere, can remove the whole thing
      return finish(tokenizer.end());
    }

    if (isOp(token) && !isDot(token)) {
      if (op && !remaining) {
        return finish(token);
      }

      op = toMath(token);
    }

    if (isNumeric(token) || isDot(token)) {
      const value = toMath(token);

      if (op) {
        right += value;
      } else {
        left += value;
      }
    }
  }

  return tokens;
};
