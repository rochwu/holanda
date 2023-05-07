const key = 'data-input';

export const attributes = {
  input: {
    [key]: true,
  },
  read: (element: HTMLElement) => {
    return element.getAttribute(key);
  },
  text: {
    dir: 'ltr',
  },
};
