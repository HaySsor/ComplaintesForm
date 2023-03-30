import {createContext, useState} from 'react';
import type {ListReservationItem} from '../types/ListOfReservations';
import {changeChecked} from '../hook/changeList';
import type {EditType} from '../types/EditType';
import {HandleEditList} from '../hook/onHandleEditList';

export const ListOfReservationsContext = createContext({
  listOfReservations: [] as ListReservationItem[],
  addItem: (item: ListReservationItem) => {},
  changeSms: (id: string | number, checked: boolean) => {},
  changeDone: (id: string | number, checked: boolean) => {},
  delateItem: (id: string | number) => {},
  handleEdit: (obj: EditType, id: string | number) => {},
});

type PropsType = {
  children: JSX.Element;
};

export const ListOfReservationsProvider = ({children}: PropsType) => {
  const [listOfReservations, setListOfReservations] = useState<
    ListReservationItem[]
  >([]);

  const addItem = (newItem: ListReservationItem) => {
    setListOfReservations((old) => {
      return [...old, newItem];
    });
  };

  const changeSms = (id: string | number, checked: boolean) => {
    if (typeof id === 'string') {
      parseInt(id);
    }
    let changedList = changeChecked(listOfReservations, id, checked, 'SMS');
    changedList && setListOfReservations(changedList);
  };

  const changeDone = (id: string | number, checked: boolean) => {
    if (typeof id === 'string') {
      parseInt(id);
    }
    let changedList = changeChecked(listOfReservations, id, checked, 'done');
    changedList && setListOfReservations(changedList);
  };

  const delateItem = (id: string | number) => {
    const changedList = listOfReservations.filter((item) => item.id !== id);
    changedList && setListOfReservations(changedList);
  };

  const handleEdit = (obj: EditType, id: string | number) => {
    const changedList = HandleEditList(obj, id, listOfReservations);
    changedList && setListOfReservations(changedList);
  };

  const value = {
    listOfReservations,
    addItem,
    changeSms,
    changeDone,
    delateItem,
    handleEdit,
  };
  return (
    <ListOfReservationsContext.Provider value={value}>
      {children}
    </ListOfReservationsContext.Provider>
  );
};
