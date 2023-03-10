import styled from './calculator-input.module.scss';
import {ComponentProps} from 'react';

interface PropsType extends ComponentProps<'input'> {
  labelText: string;
}

export const CalculatorInput = ({labelText, ...props}: PropsType) => {
  return (
    <div>
      <label>{labelText}</label>
      <input type='number' {...props} />
    </div>
  );
};
