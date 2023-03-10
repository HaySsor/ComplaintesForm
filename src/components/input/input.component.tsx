import styled from './input.module.scss';

import {useState, useContext} from 'react';
import {NameContext} from '../../context/NameContext';
type InputProps = {
  labelText: string;
  inputProductName: boolean;
};

export const Input = ({labelText, inputProductName}: InputProps) => {
  const [inputValue, setInputValue] = useState('');
  const {productName, handleProductName} = useContext(NameContext);

  const handleInputValueNameProduct = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    handleProductName(value);
  };

  const handleInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value.toLocaleUpperCase());
  };

  return inputProductName ? (
    <div className={`${styled.inputBox} `}>
      <input
        type='text'
        onChange={handleInputValueNameProduct}
        value={productName}
        className={styled.name}
      />
      <label className={`${productName.length > 0 ? styled.shrink : ''} `}>
        {labelText}
      </label>
    </div>
  ) : (
    <div className={`${styled.inputBox} `}>
      <input
        type='text'
        onChange={handleInputValue}
        value={inputValue}
        autoComplete='new-password'
      />
      <label className={`${inputValue.length > 0 ? styled.shrink : ''} `}>
        {labelText}
      </label>
    </div>
  );
};
