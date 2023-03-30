import styled from './List.module.scss';
import {ReservationListInputBox} from '../../components/reservationListInputBox/reservationListInputBox.component';
import {ReservationList} from '../../components/reservationList/reservationList.component';

export const ListPage = () => {
  return (
    <div className={styled.ListBox}>
      <ReservationListInputBox />
      <h3>Lista Rezerwacji</h3>
      <ReservationList />
    </div>
  );
};
