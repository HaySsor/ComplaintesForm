import styled from './reservationListInputSpan.module.scss';
import {forwardRef} from 'react';
import {EditType} from '../../types/EditType';
import {ChangeEvent, KeyboardEvent, MouseEvent} from 'react';

type PropsType = {
  editName: string;
  holderData: EditType;
  handleInputValue: (event: ChangeEvent<HTMLInputElement>) => void;
  handleEnterAccept: (e: KeyboardEvent<HTMLInputElement>) => void;
  handleEditSpan: (event: MouseEvent<HTMLSpanElement>) => void;
};

export const ReservationListInputSpan = (
  {
    editName,
    holderData,
    handleInputValue,
    handleEnterAccept,
    handleEditSpan,
  }: PropsType,
  ref: any
) => {
  return (
    <>
      {holderData[editName as keyof EditType].edit ? (
        <input
          name={editName}
          value={holderData[editName as keyof EditType].text}
          onChange={handleInputValue}
          onKeyDown={handleEnterAccept}
        />
      ) : (
        <span
          className={styled.infoSpan}
          data-edit={editName}
          onDoubleClick={handleEditSpan}>
          {holderData[editName as keyof EditType].text}
        </span>
      )}
    </>
  );
};
