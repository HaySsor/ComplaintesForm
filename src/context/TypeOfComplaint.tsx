import {ChangeEvent, createContext, useState} from 'react';

export const TypeOfComplaintsContext = createContext({
  typeOfComplaints: '',
  handleComplaints: (value: string) => {},
});

type PropsProvider = {
  children: JSX.Element;
};

export const TypeOfComplaintsProvider = ({children}: PropsProvider) => {
  const [typeOfComplaints, setTypeOfComplaints] = useState('Gwarancja');

  const handleComplaints = (value: string) => {
    setTypeOfComplaints(value);
  };

  const value = {typeOfComplaints, handleComplaints};

  return (
    <TypeOfComplaintsContext.Provider value={value}>
      {children}
    </TypeOfComplaintsContext.Provider>
  );
};
