import styled from './calculator-page.module.scss';
import {CalculatorInput} from '../../components/calculator-input/calculator-input.component';
import {useEffect, useState} from 'react';
import type {CalculatorInitData} from '../../types/TypeCalculator';

const INITIAL_DATA: CalculatorInitData = {
  e200: 0,
  e100: 0,
  e50: 0,
  e20: 0,
  e10: 0,
  e5: 0,
  e2: 0,
  e1: 0,
  'e0.5': 0,
  'e0.2': 0,
  'e0.1': 0,
  'e0.05': 0,
  'e0.02': 0,
  'e0.01': 0,
};

export const CalculatorPage = () => {
  const [money, setMoney] = useState<number>();
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
    let s = multiplier * parseFloat(value);
    SetMoneyValue({...moneyValue, [name]: s});
  };

  useEffect(() => {
    const s = Object.values(moneyValue);
    let x = s.reduce((a, b) => a + b, 0);
    setSum(x);
  }, [moneyValue]);

  const labels = Object.entries(moneyInCash);

  return (
    <div className={styled.calcBox}>
      <h2>Calculator</h2>
      <h3>Kwota z Raporu {money}</h3>
      <CalculatorInput
        labelText='Dzienny Utarg'
        value={money}
        onChange={handleMoney}
      />
      {labels.map((item) => {
        const name = item[0].slice(1);
        const value = item[1];
        return (
          <CalculatorInput
            key={name}
            labelText={name}
            value={value}
            name={item[0]}
            onChange={handleMoneyInCash}
          />
        );
      })}
      <h1>{isNaN(sum) ? 0 : sum}</h1>
    </div>
  );
};
