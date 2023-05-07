import {FC} from 'react';

import {enoughCents, frontZero, useStore} from '../../store';

import {Numeric, NumericProps} from './Numeric';

type Props = Omit<NumericProps, 'value'>;

export const Zero: FC<Props> = ({...props}) => {
  const disabled = useStore((state) => {
    return frontZero(state) || enoughCents(state);
  });

  return <Numeric disabled={disabled} {...props} value={0} />;
};
