import {Id} from './state';

export const Ids = {
  Total: 'total',
  Subtotal: 'subtotal',
  Tax: 'tax',
  LineTotal: 'line total',
} satisfies Record<string, Id>;
