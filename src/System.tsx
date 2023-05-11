import {useSwipe} from '@nederland/use-swipe';
import {FC} from 'react';

import {order} from './order';
import {useStore} from './store';

export const System: FC = () => {
  const select = useStore((state) => state.select);
  const selected = useStore((state) => state.id);

  useSwipe((action) => {
    switch (action) {
      case 'left':
      case 'up': {
        select(order.getPrevious(selected))();
        return;
      }
      case 'right':
      case 'down': {
        select(order.getNext(selected))();
        return;
      }
    }
  });

  return null;
};
