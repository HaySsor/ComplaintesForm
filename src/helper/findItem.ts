import type {ListReservationItem} from '../types/ListOfReservations';

export const findData = (list: ListReservationItem[], id: string | number) => {
  return list.find((item) => item.id === id);
};
