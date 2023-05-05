import {evaluate} from 'mathjs';

import {isDot, isNumeric, isOp, isEnd} from '../is';
import {Token} from '../types';

import {toMath} from './tokenization';
import {tokenizer} from './tokenizer';

const total = (value: string): number => {
  try {
    const answer: number = evaluate(value);
    return Number(answer.toFixed(2));
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
