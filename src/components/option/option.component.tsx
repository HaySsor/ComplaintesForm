import styled from './option.module.scss';
import {Link} from 'react-router-dom';

type PropsType = {
  address: boolean;
  handleCheckBox: () => void;
  handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Option = ({handleCheckBox, address, handleSelect}: PropsType) => {
  const PrintFunction = () => {
    window.print();
  };

  return (
    <>
      <label className={styled.address}>
        {' '}
        <input
          type='checkbox'
          onChange={handleCheckBox}
          checked={address}
        />{' '}
        Adres
      </label>
      <select className={styled.select} onChange={handleSelect}>
        <option defaultValue='Gwarancja'>Gwarancja</option>
        <option value='Rękojmia'>Rękojmia</option>
        <option value='Naprawa Odpłatna'>Naprawa Odpłatna</option>
        <option value='Przedsprzedaż'>Przedsprzedaż</option>
      </select>

      <button className={styled.print} onClick={PrintFunction}>
        Drukuj
      </button>
    </>
  );
};
