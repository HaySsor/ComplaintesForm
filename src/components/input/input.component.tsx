import styled from './input.module.scss';

import {useState, ChangeEvent} from 'react';

type InputProps = {
  labelText: string;
};

export const Input = ({labelText}: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value.toLocaleUpperCase());
  };

  return (
    <div className={`${styled.inputBox} `}>
      <input type='text' onChange={handleInputValue} value={inputValue} />
      <label className={`${inputValue.length > 0 ? styled.shrink : ''} `}>
        {labelText}
      </label>
    </div>
  );
};
