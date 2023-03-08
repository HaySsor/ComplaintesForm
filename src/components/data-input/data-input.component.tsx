import styled from './data-input.module.scss';

type DataInputType = {
  labelText: string;
};

export const DataInput = ({labelText}: DataInputType) => {
  return (
    <div className={styled.inputBox}>
      <label> {labelText} </label>
      <input type='date' />
    </div>
  );
};
