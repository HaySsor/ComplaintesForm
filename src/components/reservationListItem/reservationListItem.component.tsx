import styled from './reservationListItem.module.scss';
import type {ListReservationItem} from '../../types/ListOfReservations';
import type {EditType} from '../../types/EditType';
import {ChangeEvent, useState, MouseEvent, KeyboardEvent, useRef} from 'react';
import {ReservationListInputSpan} from '../reservationListInputSpan/reservationListInputSpan.component';

type Props = {
  data: ListReservationItem;
  changeSms: (id: string | number, checked: boolean) => void;
  changeDone: (id: string | number, checked: boolean) => void;
  delateItem: (id: string | number) => void;
  handleEdit: (obj: EditType, id: string | number) => void;
};

export const ReservationListItem = ({
  data,
  changeSms,
  changeDone,
  delateItem,
  handleEdit,
}: Props) => {
  const {name, number, product, id, SMS, done} = data;

  const [holderData, setHolderData] = useState<EditType>({
    name: {
      text: name,
      edit: false,
    },
    number: {
      text: number,
      edit: false,
    },
    product: {
      text: product,
      edit: false,
    },
  });

  const handleSms = (e: ChangeEvent<HTMLInputElement>) => {
    changeSms(id, e.target.checked);
  };
  const handleDone = (e: ChangeEvent<HTMLInputElement>) => {
    changeDone(id, e.target.checked);
  };
  const handleDelate = () => {
    delateItem(id);
  };

  const handleEditSpan = (event: MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    const span: HTMLSpanElement = event.currentTarget;
    const editNameElement = span.dataset.edit;

    if (editNameElement) {
      setHolderData((old) => {
        return {
          ...old,
          [editNameElement as keyof EditType]: {
            ...old[editNameElement as keyof EditType],
            edit: true,
          },
        };
      });
    }
  };
  const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;

    setHolderData((old) => {
      return {...old, [name]: {...old[name as keyof EditType], text: value}};
    });
  };

  const handleEnterAccept = (e: KeyboardEvent<HTMLInputElement>) => {
    const input: HTMLInputElement = e.currentTarget;
    const name = input.name;

    if (e.key === 'Enter') {
      setHolderData((old) => {
        return {...old, [name]: {...old[name as keyof EditType], edit: false}};
      });
    }
    handleEdit(holderData, id);
  };

  const renderList = Object.keys(holderData);

  return (
    <div className={styled.list}>
      {renderList.map((item) => {
        return (
          <ReservationListInputSpan
            key={item}
            editName={item}
            holderData={holderData}
            handleInputValue={handleInputValue}
            handleEnterAccept={handleEnterAccept}
            handleEditSpan={handleEditSpan}
          />
        );
      })}
      <input
        type='checkbox'
        checked={SMS}
        className={styled.infoSpan}
        onChange={handleSms}
      />
      <input
        type='checkbox'
        checked={done}
        className={styled.infoSpan}
        value='Odebrane'
        onChange={handleDone}
      />
      <button className={styled.delete} onClick={handleDelate}>
        X
      </button>
    </div>
  );
};
