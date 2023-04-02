import styled from './home.module.scss';
import {Link} from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className={styled.homeBox}>
      <div className={styled.titleBox}>
        <span className={styled.letter}>M</span>
        <span className={styled.letter}>E</span>
        <span className={styled.letter}>N</span>
        <span className={styled.letter}>U</span>
      </div>
      <div className={styled.linkBox}>
        <Link to='./form' className={styled.link}>
          <div className={styled.infoBox}>
            <img src='/icon/contract.png' alt='' area-hidden={true} />
            <span>Reklamacje</span>
          </div>
        </Link>
        <Link to='/calc' className={styled.link}>
          <div className={styled.infoBox}>
            <img src='/icon/calculator.png' alt='' area-hidden={true} />
            <span>Kalkulator</span>
          </div>
        </Link>
        <Link to='/listPage' className={styled.link}>
          <div className={styled.infoBox}>
            <img src='/icon/to-do-list.png' alt='' area-hidden={true} />
            <span>Rezerwacje</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
