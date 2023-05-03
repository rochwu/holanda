import {evaluate} from 'mathjs';

import {Token, isDecimal, isNumber, isOp, isEnd} from '../types';
import {toMathable} from './tokenization';
import {tokenizer} from '.';

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
  let left: string = '';
  let op: string = '';
  let right: string = '';
  let remaining: Token.Op | undefined;

  const finish = (remaining: Token.Op | Token.End) => {
    const cutoff = tokens.indexOf(remaining);

    const value = total(`${left}${op}${right}`);
    const expression = tokenizer.number(value);

    const next: Token.Any[] = isEnd(remaining)
      ? [expression]
      : [expression, ...tokens.slice(cutoff)];

    return reduce(next);
  };

  for (const token of tokens) {
    if (isEnd(token)) {
      return finish(tokenizer.end());
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
