import styled from './form.module.scss';
import {Input} from '../input/input.component';
import {useState} from 'react';
import {ForumSelect} from '../forum-select/forum-select.component';
import {DataInput} from '../data-input/data-input.component';
import {TextareaInput} from '../textarea-input/textarea-input.component';

const PERSONAL_DATA_INPUT_TEXT: string[] = [
  'Numer Reklamacji ',
  'Imie  i Nazwisko',
  'Numer Telefonu',
  'Email',
  'Dowód Zakupu',
];
const DATE_INPUT_TEXT: string[] = ['Data Zakupu', 'Data Wystąpienia'];
const TEXT_AREA_TEXT: string[] = ['Opis Usterki', 'Stan urządzenia'];

export const Form = () => {
  const [warranty, setWarranty] = useState(false);

  const handleWarranty = (choose: boolean) => {
    setWarranty(choose);
  };

  return (
    <>
      <ForumSelect handleWarranty={handleWarranty} />
      <form className={styled.forum}>
        <div className={styled.personalData}>
          {PERSONAL_DATA_INPUT_TEXT.map((item) => {
            return (
              <Input
                labelText={item}
                inputProductName={false}
                key={Math.random()}
              />
            );
          })}
          <Input labelText='Nazwa Produktu' inputProductName={true} />
          <Input labelText='Numer Seryjny' inputProductName={false} />
          {warranty && (
            <Input labelText='Żądanie klienta' inputProductName={false} />
          )}
        </div>
        <div className={styled.item}>
          {DATE_INPUT_TEXT.map((item) => {
            return <DataInput labelText={item} key={Math.random()} />;
          })}
          {TEXT_AREA_TEXT.map((item) => {
            return <TextareaInput labelText={item} key={Math.random()} />;
          })}
        </div>
      </form>
    </>
  );
};
