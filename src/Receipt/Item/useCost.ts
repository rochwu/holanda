import {Id, Ids, useValue} from '../../store';

export const useCost = (id: Id) => {
  const value = useValue(id);
  const total = useValue(Ids.Total);
  const subtotal = useValue(Ids.Subtotal);

  if (value && total && subtotal) {
    const ratio = value / subtotal;

    return total * ratio;
  }

  return 0;
};
