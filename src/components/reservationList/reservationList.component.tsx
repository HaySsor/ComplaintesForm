import styled from './reservationList.module.scss';
import {useContext} from 'react';
import {ListOfReservationsContext} from '../../context/ListOfReservationsContext';
import {ReservationListItem} from '../reservationListItem/reservationListItem.component';

const spanName = ['Imię', 'Numer/Email', 'Nazwa Produktu', 'SMS', 'Odebrane'];

export const ReservationList = () => {
  const {listOfReservations, changeSms, changeDone, delateItem,handleEdit} = useContext(
    ListOfReservationsContext
  );

  return (
    <div className={styled.ListContainer}>
      <div className={styled.infoBox}>
        {spanName.map((item) => {
          return (
            <span className={styled.infoSpan} key={item}>
              {item}
            </span>
          );
        })}
      </div>
      <div>
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
    </div>
  );
};
