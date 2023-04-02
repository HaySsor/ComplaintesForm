import styled from './forum-select.module.scss';
import {useContext, useState} from 'react';
import {Option} from '../option/option.component';
import {TypeOfComplaintsContext} from '../../context/TypeOfComplaint';

type ForumSelectType = {
  handleWarranty: (choose: boolean) => void;
  setAddress: (value: boolean) => void;
  address: boolean;
};

export const ForumSelect = ({
  handleWarranty,
  setAddress,
  address,
}: ForumSelectType) => {
  const {handleComplaints} = useContext(TypeOfComplaintsContext);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    value === 'Rękojmia' ? handleWarranty(true) : handleWarranty(false);
    handleComplaints(value);
  };
  const handleCheckBox = () => {
    setAddress(!address);
  };

  return (
    <div className={styled.role}>
      <Option
        address={address}
        handleCheckBox={handleCheckBox}
        handleSelect={handleSelect}
      />
    </div>
  );
};
