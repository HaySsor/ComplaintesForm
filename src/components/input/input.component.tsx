import styled from './input.module.scss';
import {ComponentProps} from 'react';
interface InputProps extends ComponentProps<'input'> {
  labelText: string;
}

export const Input = ({labelText, ...props}: InputProps) => {
  return (
    <div className={`${styled.inputBox} `}>
      <input type='text' autoComplete='new-password' {...props} />
      <label
        className={`${props.value && props.value ? styled.shrink : ''} `}>
        {labelText}
      </label>
    </div>
  );
};
