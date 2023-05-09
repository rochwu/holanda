import {FC, useId} from 'react';

import {Field} from '../Field';
import {Line} from '../Line';

import {Final} from './Final';

type Props = {
  label?: string;
};

export const Item: FC<Props> = ({label}) => {
  const id = useId();

  // TODO: Better message or probs just do a proper header for the whole App
  return (
    <Line label={label ?? 'thing'} heading="🍗🤔🇳🇱💸">
      <Final identifier={id} />
      <Field identifier={id} />
    </Line>
  );
};
