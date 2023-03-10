import styled from './forum-select.module.scss';
import {useState} from 'react';
import {Option} from '../option/option.component';

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
  const [role, setRole] = useState('Gwarancja');

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    value === 'Rękojmia' ? handleWarranty(true) : handleWarranty(false);
    setRole(value);
  };
  const handleCheckBox = () => {
    setAddress(!address);
  };

  return (
    <div className={styled.role}>
      <div className={styled.optionBox}>
        <Option
          address={address}
          handleCheckBox={handleCheckBox}
          handleSelect={handleSelect}
        />
      </div>
      <div className={styled.title}>
        <h2>{role}</h2>
        <p>Numer listu przewozowego :</p>
      </div>
    </div>
  );
};
