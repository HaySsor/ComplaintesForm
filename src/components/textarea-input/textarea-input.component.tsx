import styled from './textarea-input.module.scss';
import {ComponentProps} from 'react';

interface TextareaInputType extends ComponentProps<'textarea'> {
  labelText: string;
}

export const TextareaInput = ({labelText, ...props}: TextareaInputType) => {
  return (
    <div className={styled.textareaBox}>
      <label>{labelText}</label>
      <textarea {...props} />
    </div>
  );
};
