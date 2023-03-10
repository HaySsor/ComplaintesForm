import styled from './form.module.scss';
import {Input} from '../input/input.component';
import {useState} from 'react';
import {ForumSelect} from '../forum-select/forum-select.component';
import {DataInput} from '../data-input/data-input.component';
import {TextareaInput} from '../textarea-input/textarea-input.component';

const PERSONAL_DATA_INPUT_TEXT: string[] = [
  'Numer Reklamacji ',
  'Dowód Zakupu',
  'Imię  i Nazwisko',
  'Numer Telefonu',
  'E-mail',
];
const DATE_INPUT_TEXT: string[] = ['Data Zakupu', 'Data Usterki'];
const TEXT_AREA_TEXT: string[] = ['Opis Usterki', 'Stan urządzenia'];

export const Form = () => {
  const [warranty, setWarranty] = useState(false);
  const [address, setAddress] = useState(false);

  const handleWarranty = (choose: boolean) => {
    setWarranty(choose);
  };


  return (
    <>
      <ForumSelect
        handleWarranty={handleWarranty}
        setAddress={setAddress}
        address={address}
      />
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
          {address && (
            <div>
              <Input labelText='Ulica' inputProductName={false} />
              <Input labelText='Miasto' inputProductName={false} />
            </div>
          )}
          <Input labelText='Nazwa Produktu' inputProductName={true} />
          <Input labelText='Numer Seryjny / Number IMEI' inputProductName={false} />
        </div>
        <div className={styled.item}>
          <div className={styled.dataBox}>
            {DATE_INPUT_TEXT.map((item) => {
              return <DataInput labelText={item} key={Math.random()} />;
            })}
          </div>
          {warranty && (
            <Input labelText='Żądanie klienta' inputProductName={false} />
          )}
          {TEXT_AREA_TEXT.map((item) => {
            return <TextareaInput labelText={item} key={Math.random()} />;
          })}
        </div>
      </form>
    </>
  );
};
