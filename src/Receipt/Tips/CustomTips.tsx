import {FC, useCallback, useId} from 'react';

import {useStore, useValue} from '../../store';
import {spacing} from '../../styles';
import {Field} from '../Field';
import {Line} from '../Line';

import {Base} from './Base';

export const CustomTips: FC = () => {
  const id = useId();

  const percent = useValue(id);

  const tip = useStore(useCallback((state) => state.tip(id), [id]));

  return (
    <Line name="_%" symbol={`\u00D7`}>
      <Field identifier={id} onClick={tip} width={spacing.shortInput} />
      <Base identifier={id} percent={percent} />
    </Line>
  );
};
