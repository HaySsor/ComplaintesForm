import styled from './reservationList.module.scss';
import {useContext} from 'react';
import {ListOfReservationsContext} from '../../context/ListOfReservationsContext';
import {ReservationListItem} from '../reservationListItem/reservationListItem.component';

export const ReservationList = () => {
  const {listOfReservations, changeSms, changeDone, delateItem, handleEdit} =
    useContext(ListOfReservationsContext);

  return (
    <div className={styled.ListContainer}>
      {listOfReservations.map((item) => {
        return (
          <ReservationListItem
            data={item}
            key={item.id}
            changeSms={changeSms}
            changeDone={changeDone}
            delateItem={delateItem}
            handleEdit={handleEdit}
          />
        );
      })}
    </div>
  );
};
