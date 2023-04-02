import {ListReservationItem} from '../types/ListOfReservations';
import {findData} from './findItem';

export const changeChecked = (
  list: ListReservationItem[],
  id: string | number,
  checked: boolean,
  nameVal = 'string'
) => {
  const specificItem = findData(list, id);

  if (specificItem) {
    const changedList: ListReservationItem[] = list.map((listItem) =>
      listItem.id === id ? {...listItem, [nameVal]: checked} : listItem
    );
    return changedList;
  }
};
