import {useRef} from 'react';

export const useLongPress = (callback: () => void) => {
  const interval = useRef<number>();

  const cancel = () => {
    window.clearTimeout(interval.current);
  };

  const start = () => {
    interval.current = window.setTimeout(callback, 500);
  };

  return {
    start,
    cancel,
    props: {
      onTouchStart: start,
      onTouchEnd: cancel,
      onTouchCancel: cancel,
    },
  };
};
