import styled from './signature.module.scss';

export const Signature = () => {
  return (
    <div className={styled.signatureContainer}>
      <div className={styled.box}>
        <span className={styled.title}>PODPIS I DATA ZŁOŻENIA:</span>
        <div className={styled.signatureArea}></div>
      </div>
      <div className={styled.box}>
        <span className={styled.title}>PODPIS I DATA ODEBRANIA:</span>
        <div className={styled.signatureArea}></div>
      </div>
    </div>
  );
};
