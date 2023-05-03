import {OpType} from './types';

export const sign = (op: OpType): string => {
  switch (op) {
    case OpType.Decimal:
      return '\u2219';
    case OpType.Divide:
      return '\u00F7';
    case OpType.Subtract:
      return '\u2212';
    case OpType.Multiply:
      return '\u00D7';
    case OpType.Add:
    default:
      return '\u002B';
  }
};

export const input = (op: OpType): string => {
  if (op === OpType.Decimal) {
    return '.';
  }

  return sign(op);
};

export const math = (op: OpType): string => {
  switch (op) {
    case OpType.Decimal:
      return '.';
    case OpType.Divide:
      return '/';
    case OpType.Subtract:
      return '-';
    case OpType.Multiply:
      return '*';
    case OpType.Add:
    default:
      return '+';
  }
};
