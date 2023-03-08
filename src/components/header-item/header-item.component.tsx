import {Company} from '../../types/TypeHeader';
import styled from './header-item.module.scss';

type propsHaderItem = {
  company: Company;
};

export const HeaderItem = ({company}: propsHaderItem) => {
  const {img,alt,title,street,town,contact: {email, phone},} = company;
  return (
    <div className={styled.miBox}>
      <div className={styled.ImgBox}>
        <img src={img} alt={alt} />
      </div>
      <div className={styled.infoBox}>
        <h3>{title}</h3>
        <p>{street} <br /> {town}
        </p>
        <p className={styled.contact}>
          {email} | {phone}
        </p>
      </div>
    </div>
  );
};
