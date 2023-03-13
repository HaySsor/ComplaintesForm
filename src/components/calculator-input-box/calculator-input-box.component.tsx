import styled from './calculator-input-box.module.scss';
import {CalculatorInput} from '../calculator-input/calculator-input.component';

type PropsType = {
  labels: [string, number][];
  handleMoneyInCash: (event: React.ChangeEvent<HTMLInputElement>) => void;
  money: number | string;
  sum: number;
};

export const CalculatorInputsBox = ({
  labels,
  handleMoneyInCash,
  money,
  sum,
}: PropsType) => {
  return (
    <div className={styled.inputsBox}>
      {labels.map((item) => {
        let name = item[0].slice(1);
        const value = item[1];
        return (
          <CalculatorInput
            key={item[0].includes('f') ? 'f' : name}
            labelText={`${item[0].includes('f') ? 'Pod Kasą' : name + 'zł'}`}
            value={value}
            name={item[0]}
            onChange={handleMoneyInCash}
          />
        );
      })}

      <h3 className={`${styled.sum}`}>
        <span> = </span>
        <span
          className={`${
            (money && sum === money) || (money && sum > money)
              ? styled.ok
              : styled.not
          }`}>
          {isNaN(sum) ? 0 : sum}
        </span>
      </h3>
    </div>
  );
};
