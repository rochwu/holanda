import {FC} from 'react';

import {enoughCents, frontZero, useInputState} from '../../input-state';

import {Number, NumberProps} from './Number';

type Props = Omit<NumberProps, 'number'>;

export const Zero: FC<Props> = ({...props}) => {
  const disabled = useInputState((state) => {
    return frontZero(state) || enoughCents(state);
  });

  return <Number disabled={disabled} {...props} number={0} />;
};
