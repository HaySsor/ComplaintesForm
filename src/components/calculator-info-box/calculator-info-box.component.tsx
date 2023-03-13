import styled from './calculator-info-box.module.scss';

type PropsType = {
  money: number | string;
  sum: number;
};

export const CalculatorInfoBox = ({money, sum}: PropsType) => {
  return (
    <div className={styled.infoBox}>
      {money && sum === money ? (
        <span>Wszystko się zgadza, No i to mnie się podoba 😎</span>
      ) : null}
      {money && sum > money ? (
        <span>
          Oj za dużo ale {typeof money === 'number' ? sum - money : null}zł
          będzie na kolejne wyjście 😎
        </span>
      ) : null}
    </div>
  );
};
