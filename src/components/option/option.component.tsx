import styled from './option.module.scss';
import {Button} from '../button/button.component';

// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

// const savePDF = () => {
//   const input = document.getElementById('pdf-content') as HTMLElement;

//   html2canvas(input, {scale: 3}).then((canvas) => {
//     const imgData = canvas.toDataURL('image/png');
//     const pdf = new jsPDF();
//     pdf.addImage(
//       imgData,
//       'PNG',
//       0,
//       0,
//       pdf.internal.pageSize.getWidth(),
//       pdf.internal.pageSize.getHeight()
//     );
//     pdf.save('page.pdf');
//   });
// };

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
    <div className={styled.optionContainer}>
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
      <div className={styled.buttonBox}>
        {/* <button className={`${styled.print} ${styled.pdf}`} onClick={savePDF}>
          PDF
        </button> */}
        <Button ButtonText='Drukuj' onClick={PrintFunction} />
      </div>
    </div>
  );
};
