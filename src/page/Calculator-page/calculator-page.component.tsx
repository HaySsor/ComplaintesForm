import styled from './calculator-page.module.scss';
import {CalculatorInput} from '../../components/calculator-input/calculator-input.component';
import {CalculatorInputsBox} from '../../components/calculator-input-box/calculator-input-box.component';
import {CalculatorInfoBox} from '../../components/calculator-info-box/calculator-info-box.component';
import {useCalculate} from '../../hook/useCalculate';

export const CalculatorPage = () => {
  const {money, labels, handleMoney, handleMoneyInCash, sum} = useCalculate();

  return (
    <div className={styled.calcBox}>
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
  );
};
