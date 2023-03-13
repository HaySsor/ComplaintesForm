import styled from './data-input.module.scss';
import {ComponentProps} from 'react';

interface DataInputType extends ComponentProps<'input'> {
  labelText: string;
}

export const DataInput = ({labelText, ...props}: DataInputType) => {
  return (
    <div className={styled.inputBox}>
      <label> {labelText} </label>
      <input type='date' {...props} />
    </div>
  );
};
