import {ChangeEvent, createContext, useState, ChangeEventHandler} from 'react';
import type {FormValueInitialState} from '../types/FormValueInitialState';

const INITIAL_STATE: FormValueInitialState = {
  guarantyNumber: '',
  proofOfPurchase: '',
  name: '',
  phone: '',
  email: '',
  town: '',
  street: '',
  productName: '',
  SN: '',
  buyingDate: '',
  faultDate: '',
  faultInfo: '',
  deviceStatus: '',
  customerRequest: '',
};

export const FormValueContext = createContext({
  formValue: {} as FormValueInitialState,
  handleInputValue: (event: ChangeEvent<HTMLInputElement>) => {},
});

type PropsProvider = {
  children: JSX.Element;
};

export const FormValueProvider = ({children}: PropsProvider) => {
  const [formValue, setFormValue] = useState(INITIAL_STATE);

  const handleInputValue: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    const {name, value} = event.target;
    setFormValue({...formValue, [name]: value});
  };

  const value = {formValue, handleInputValue};

  return (
    <FormValueContext.Provider value={value}>
      {children}
    </FormValueContext.Provider>
  );
};
