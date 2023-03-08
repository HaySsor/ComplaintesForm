import styled from './forum-select.module.scss';
import {useState} from 'react';

type ForumSelectType = {
  handleWarranty: (choose: boolean) => void;
};

export const ForumSelect = ({handleWarranty}: ForumSelectType) => {
  const [role, setRole] = useState('Gwarancja');

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    value === 'Rękojmia' ? handleWarranty(true) : handleWarranty(false);
    setRole(value);
  };

  return (
    <div className={styled.role}>
      <select className={styled.select} onChange={handleSelect}>
        <option defaultValue='Gwarancja'>Gwarancja</option>
        <option value='Rękojmia'>Rękojmia</option>
        <option value='Naprawa Odpłatna'>Naprawa Odpłatna</option>
        <option value='Przedsprzedaż'>Przedsprzedaż</option>
      </select>
      <div className={styled.title}>
        <h2>{role}</h2>
        <p>Numer listu przewozowego :</p>
      </div>
    </div>
  );
};
