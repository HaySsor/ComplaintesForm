import styled from './textarea-input.module.scss';

type TextareaInputType = {
  labelText: string;
};

export const TextareaInput = ({labelText}: TextareaInputType) => {
  return (
    <div className={styled.textareaBox}>
      <label>{labelText}</label>
      <textarea />
    </div>
  );
};
