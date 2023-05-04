import {RefObject, useLayoutEffect} from 'react';

type Elemental = HTMLElement | RefObject<HTMLElement>;

type Props<Change extends Elemental, Watch extends Elemental> = {
  watch?: Watch;
  change?: Change;
};

const resize = (element: HTMLElement) => () => {
  window.requestAnimationFrame(() => {
    element.style.height = `${window.innerHeight}px`;
    element.style.width = `${window.innerWidth}px`;
  });
};

const isElement = (elemental: Elemental): elemental is HTMLElement => {
  return elemental instanceof HTMLElement;
};

const getElement = <T extends Elemental>(
  elemental: T,
): HTMLElement | undefined => {
  if (!isElement(elemental)) {
    return elemental.current ?? undefined;
  }

  return elemental;
};

export const useAutoResize = <
  Change extends Elemental,
  Watch extends Elemental,
>(
  props: Props<Change, Watch> = {},
) => {
  useLayoutEffect(() => {
    const change = getElement(props.change ?? document.body);
    const watch = getElement(props.watch ?? document.documentElement);

    if (!(change && watch)) {
      return;
    }

    const observer = new ResizeObserver(resize(change));

    observer.observe(watch);

    return () => {
      observer.disconnect();
    };
    // Mainly done so react can react to when ref goes from null to element
  }, [props.watch, props.change]);
};
