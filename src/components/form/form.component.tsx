import styled from './form.module.scss';
import {Input} from '../input/input.component';

const PERSONAL_DATA_INPUT_TEXT: string[] = [
  'Numer Reklamacji ',
  'Imie  i Nazwisko',
  'NUMER TELEFONU',
  'EMAIL',
  'NAZWA URZĄDZENIA ',
];

export const Form = () => {
  return (
    <form>
      <div className={styled.personalData}>
        {PERSONAL_DATA_INPUT_TEXT.map((item) => {
          return <Input labelText={item} key={Math.random()} />;
        })}
      </div>
      <div className={styled.item}></div>
    </form>
  );
};
