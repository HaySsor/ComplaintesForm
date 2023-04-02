import styled from './calculator-info-box.module.scss';

type PropsType = {
  money: number | string;
  sum: number;
};

export const CalculatorInfoBox = ({money, sum}: PropsType) => {
  return (
    <div className={styled.infoBox}>
      {money && sum === money ? (
        <span>Gooden Joben 👍🏻</span>
      ) : null}
      {money && sum > money ? (
        <span>
          Oj za dużo o {' '}
          {typeof money === 'number' ? Number((sum - money).toFixed(2)) : null}
          zł ale cii 🤫
        </span>
      ) : null}
    </div>
  );
};
