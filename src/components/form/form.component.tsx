import styled from './form.module.scss';
import {Input} from '../input/input.component';
import {useState, useContext, ChangeEventHandler} from 'react';
import {ForumSelect} from '../forum-select/forum-select.component';
import {DataInput} from '../data-input/data-input.component';
import {TextareaInput} from '../textarea-input/textarea-input.component';
import {FormValueContext} from '../../context/FormValueContext';
import type {TypeInputRenderArray} from '../../types/TypeInputRenderArray';

export const Form = () => {
  const [warranty, setWarranty] = useState(false);
  const [address, setAddress] = useState(false);

  const {formValue, handleInputValue} = useContext(FormValueContext);

  const handleWarranty = (choose: boolean) => {
    setWarranty(choose);
  };
  const InputRenderArray: TypeInputRenderArray[] = [
    {
      id: 1,
      labelText: 'Numer Reklamacji',
      value: formValue.guarantyNumber,
      name: 'guarantyNumber',
      onChange: handleInputValue,
    },
    {
      id: 2,
      labelText: 'Dowód zakupu',
      value: formValue.proofOfPurchase,
      name: 'proofOfPurchase',
      onChange: handleInputValue,
    },
    {
      id: 3,
      labelText: 'Imie i Nazwisko',
      value: formValue.name,
      name: 'name',
      onChange: handleInputValue,
    },
    {
      id: 4,
      labelText: 'Numer Telefonu',
      value: formValue.phone,
      name: 'phone',
      onChange: handleInputValue,
    },
    {
      id: 5,
      labelText: 'E-mail',
      value: formValue.email,
      name: 'email',
      onChange: handleInputValue,
    },
    {
      id: 6,
      labelText: 'Nazwa Produktu',
      value: formValue.productName,
      name: 'productName',
      onChange: handleInputValue,
    },
    {
      id: 7,
      labelText: 'Numer IMEI / SN',
      value: formValue.SN,
      name: 'SN',
      onChange: handleInputValue,
    },
  ];

  return (
    <>
      <ForumSelect
        handleWarranty={handleWarranty}
        setAddress={setAddress}
        address={address}
      />
      <form className={styled.forum}>
        <div className={styled.personalData}>
          {InputRenderArray.map(({labelText, value, name, onChange, id}) => {
            return (
              <Input
                labelText={labelText}
                value={value}
                name={name}
                onChange={onChange}
                key={id}
              />
            );
          })}
          {address && (
            <div>
              <Input
                labelText='Ulica'
                value={formValue.street}
                name='street'
                onChange={handleInputValue}
              />
              <Input
                labelText='Miasto'
                value={formValue.town}
                name='town'
                onChange={handleInputValue}
              />
            </div>
          )}
        </div>
        <div className={styled.item}>
          <div className={styled.dataBox}>
            <DataInput
              labelText='Data Zakupu'
              value={formValue.buyingDate}
              onChange={handleInputValue}
              name='buyingDate'
            />
            <DataInput
              labelText='Data Usterki'
              value={formValue.faultDate}
              onChange={handleInputValue}
              name='faultDate'
            />
          </div>
          {warranty && (
            <Input
              labelText='Żądanie klienta'
              value={formValue.customerRequest}
              name='customerRequest'
              onChange={handleInputValue}
            />
          )}
          <TextareaInput
            labelText='Opis Usterki'
            value={formValue.faultInfo}
            onChange={
              handleInputValue as ChangeEventHandler<
                HTMLTextAreaElement | HTMLInputElement
              >
            }
            name='faultInfo'
          />
          <TextareaInput
            labelText='Stan urządzenia / Zawartość'
            value={formValue.deviceStatus}
            onChange={
              handleInputValue as ChangeEventHandler<
                HTMLTextAreaElement | HTMLInputElement
              >
            }
            name='deviceStatus'
          />
        </div>
      </form>
    </>
  );
};
