import {Header} from '../../components/header/header.component';
import {Form} from '../../components/form/form.component';
import {useContext} from 'react';
import {Statute} from '../../components/statute/statute.component';
import {Signature} from '../../components/signature/signature.component';
import styled from './form-page.module.scss';
import {FormValueContext} from '../../context/FormValueContext';
import {TypeOfComplaintsContext} from '../../context/TypeOfComplaint';

export const FormPage = () => {
  const {formValue} = useContext(FormValueContext);
  const {productName} = formValue;

  const {typeOfComplaints} = useContext(TypeOfComplaintsContext);

  const data = () => {
    let newDate = new Date();
    let date = newDate.toLocaleString('en-US', {day: '2-digit'});
    let month: number | string = newDate.getMonth();
    let year = newDate.getFullYear();

    if (month < 10) {
      month.toString();
      month = `0${month}`;
    }

    return `${date}-${month}-${year}`;
  };

  return (
    <div className={styled.box} id='pdf-content'>
      <span className={styled.data}>
        <span className={styled.text}>Data złożenia :</span> {data()}
      </span>
      <h1 className={styled.title}>
        {typeOfComplaints} {productName}
      </h1>
      <Header />
      <Form />
      <Statute />
      <Signature />
    </div>
  );
};
