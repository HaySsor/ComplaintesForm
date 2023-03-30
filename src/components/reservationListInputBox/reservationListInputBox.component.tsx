import styled from './reservationListInputBox.module.scss';
import {Input} from '../input/input.component';
import {useState, ChangeEventHandler, ChangeEvent, useContext} from 'react';
import type {ListReservationItem} from '../../types/ListOfReservations';
import {ListOfReservationsContext} from '../../context/ListOfReservationsContext';

const INITIAL_STATE: ListReservationItem = {
  id: '',
  name: '',
  number: '',
  product: '',
  SMS: false,
  done: false,
};

export const ReservationListInputBox = () => {
  const [userData, setUserData] = useState(INITIAL_STATE);
  const {name, number, product} = userData;
  const {addItem} = useContext(ListOfReservationsContext);
  const [error, setError] = useState(false);

  const handleInputValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    const {name, value} = event.target;
    setUserData((old) => {
      return {...old, [name]: value};
    });
  };
  const clearInputs = () => {
    setUserData(INITIAL_STATE);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      userData.name === '' ||
      userData.number === '' ||
      userData.product == ''
    ) {
      setError(true);
      return;
    }
    setError(false);
    let ID = (Math.random() * 100).toFixed(2);
    const newItemToAdd = {...userData, id: ID};
    addItem(newItemToAdd);
    clearInputs();
  };

  return (
    <div className={styled.container}>
      <h3>Dane Kontaktowe</h3>
      <form className={styled.inputBox} onSubmit={handleSubmit}>
        <Input
          labelText='Imie'
          name='name'
          value={name}
          onChange={handleInputValue}
          className={error ? styled.error : ''}
        />
        <Input
          labelText='Numer / Email'
          name='number'
          value={number}
          onChange={handleInputValue}
          className={error ? styled.error : ''}
        />
        <Input
          labelText='Nazwa Produktu'
          name='product'
          value={product}
          onChange={handleInputValue}
          className={error ? styled.error : ''}
        />
        <button className={styled.add}>Dodaj</button>
      </form>
    </div>
  );
};
