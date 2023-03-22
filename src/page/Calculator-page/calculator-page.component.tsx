import styled from './calculator-page.module.scss';
import {CalculatorInput} from '../../components/calculator-input/calculator-input.component';
import {useEffect, useState} from 'react';
import type {CalculatorInitData} from '../../types/TypeCalculator';
import {CalculatorInputsBox} from '../../components/calculator-input-box/calculator-input-box.component';
import {CalculatorInfoBox} from '../../components/calculator-info-box/calculator-info-box.component';

const INITIAL_DATA: CalculatorInitData = {
  e200: 0,
  e100: 0,
  e50: 0,
  e20: 0,
  e10: 0,
  e5: 0,
  e2: 0,
  e1: 0,
  'e0.50': 0,
  'e0.20': 0,
  'e0.10': 0,
  'e0.05': 0,
  'e0.02': 0,
  f1: 0,
};

export const CalculatorPage = () => {
  const [money, setMoney] = useState<number | string>('');
  const [moneyInCash, setMoneyInCash] = useState(INITIAL_DATA);
  const [moneyValue, SetMoneyValue] = useState(INITIAL_DATA);
  const [sum, setSum] = useState(0);

  const handleMoney = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setMoney(parseInt(value));
  };

  const handleMoneyInCash = (event: React.ChangeEvent<HTMLInputElement>) => {
    let {name, value} = event.target;
    setMoneyInCash({...moneyInCash, [name]: value});
    let multiplier = parseFloat(name.slice(1));
    let m = multiplier * parseFloat(value);
    SetMoneyValue({...moneyValue, [name]: m});
  };

  useEffect(() => {
    const s = Object.values(moneyValue);
    let x = s.reduce((a, b) => a + b, 0);
    setSum(Number(x.toFixed(2)));
  }, [moneyValue]);

  const labels = Object.entries(moneyInCash);

  return (
    <>
      <div className={styled.calcBox}>
        <h3 className={styled.mainTitle}>
          Kwota z Raporu <span className={styled.moneySpan}> {money} </span>
        </h3>
        <div className={styled.main}>
          <CalculatorInput
            labelText='Dzienny Utarg'
            value={money}
            onChange={handleMoney}
          />
        </div>
        <CalculatorInputsBox
          labels={labels}
          handleMoneyInCash={handleMoneyInCash}
          money={money}
          sum={sum}
        />
        <CalculatorInfoBox money={money} sum={Number(sum.toFixed(2))} />
      </div>
    </>
  );
};
