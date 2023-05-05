import {FC} from 'react';

import {enoughCents, frontZero, useInputState} from '../../input-state';

import {Numeric, NumberProps} from './Numeric';

type Props = Omit<NumberProps, 'value'>;

export const Zero: FC<Props> = ({...props}) => {
  const disabled = useInputState((state) => {
    return frontZero(state) || enoughCents(state);
  });

  return <Numeric disabled={disabled} {...props} value={0} />;
};
