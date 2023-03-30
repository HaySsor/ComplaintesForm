import {ListReservationItem} from '../types/ListOfReservations';
import {findData} from './findItem';
import {EditType} from '../types/EditType';

export const HandleEditList = (
  obj: EditType,
  id: string | number,
  list: ListReservationItem[]
) => {
  if (typeof id === 'string') {
    parseInt(id);
  }
  const x = Object.entries(obj);

  const name = x[0];
  const number = x[1];
  const product = x[2];

  const specificItem = findData(list, id);

  if (specificItem) {
    const changedList: ListReservationItem[] = list.map((listItem) =>
      listItem.id === id
        ? {
            ...listItem,
            [name[0]]: name[1].text,
            [number[0]]: number[1].text,
            [product[0]]: product[1].text,
          }
        : listItem
    );

    return changedList;
  }
};
