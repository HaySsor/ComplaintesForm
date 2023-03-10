import {Header} from '../../components/header/header.component';
import {Form} from '../../components/form/form.component';
import {useContext} from 'react';
import {NameContext} from '../../context/NameContext';
import {Statute} from '../../components/statute/statute.component';
import {Signature} from '../../components/signature/signature.component';
import styled from './form-page.module.scss';

export const FormPage = () => {
  const {productName} = useContext(NameContext);

  const data = () => {
    let newDate = new Date();
    let date = newDate.toLocaleString('en-US', {day: '2-digit'});
    let month = newDate.toLocaleString('pl-PL', {month: 'long'});
    let year = newDate.getFullYear();

    return `${date} ${month} ${year}`;
  };

  return (
    <div className={styled.box}>
      <span className={styled.data}>
        <span className={styled.text}>Data złożenia :</span> {data()}
      </span>
      <h1 className={styled.title}>Reklamacja {productName}</h1>
      <Header />
      <Form />
      <Statute />
      <Signature />
    </div>
  );
};
