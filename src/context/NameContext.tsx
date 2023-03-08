import {createContext, useState} from 'react';

type TypeNameContext = {
  productName: string;
  handleProductName: (name: string) => void;
};

type PropsProvider = {
  children: JSX.Element;
};

export const NameContext = createContext<TypeNameContext>({
  productName: '',
  handleProductName: () => {},
});

export const NameProvider = ({children}: PropsProvider) => {
  const [productName, setProductName] = useState('');

  const handleProductName = (name: string) => {
    setProductName(name);
  };

  const value = {productName, handleProductName};

  return <NameContext.Provider value={value}>{children}</NameContext.Provider>;
};
