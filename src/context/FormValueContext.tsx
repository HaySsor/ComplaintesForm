import {
  ChangeEvent,
  createContext,
  useState,
  ChangeEventHandler,
  useReducer,
  Reducer,
} from 'react';
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

type ActionType = {
  type: string;
  payload?: {
    [key: string]: string;
  };
};

const TYPE_ACTION = {
  SET_INPUT_VALUE: 'SET_INPUT_VALUE',
};

const FormValueReducer = (state: FormValueInitialState, action: ActionType) => {
  const {type, payload} = action;

  switch (type) {
    case TYPE_ACTION.SET_INPUT_VALUE:
      return {
        ...state,
        ...payload,
      };
    default:
      console.log('error');
      return state;
  }
};

type PropsProvider = {
  children: JSX.Element;
};

export const FormValueProvider = ({children}: PropsProvider) => {
  const [state, dispatch] = useReducer(FormValueReducer, INITIAL_STATE);

  const setFormValue = (name: string, value: string) => {
    dispatch({type: TYPE_ACTION.SET_INPUT_VALUE, payload: {[name]: value}});
  };

  const handleInputValue: ChangeEventHandler<
    HTMLTextAreaElement | HTMLInputElement
  > = (event) => {
    const {name, value} = event.target;
    setFormValue(name, value);
  };

  const value = {formValue: state, handleInputValue};

  return (
    <FormValueContext.Provider value={value}>
      {children}
    </FormValueContext.Provider>
  );
};
