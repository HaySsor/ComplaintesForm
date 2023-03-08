import styled from './header.module.scss';
import {HeaderItem} from '../header-item/header-item.component';
import type {Company} from '../../types/TypeHeader';

const DATA_HEADER_ITEM: Company[] = [
  {
    id: 1,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/1024px-Xiaomi_logo_%282021-%29.svg.png',
    alt: 'logo Xiaomi',
    title: 'XIAOMI STORE POSNANIA',
    street: 'ul. Pleszewska 1',
    town: '61-136 Poznań',
    contact: {
      email: 'poznan@mi-store.pl',
      phone: '575 228 665',
    },
  },
  {
    id: 2,
    img: 'https://www.ccsonline.pl/templates/deco_15/images/logo.jpg',
    alt: 'logo Cyfrowe Centrum Serwisowe',
    title: 'Cyfrowe Centrum Serwisowe S.A.',
    street: 'ul. Puławska 40A',
    town: '05-500 Piaseczno',
    contact: {
      email: 'info@ccsonline.pl',
      phone: '22  726 38 10',
    },
  },
];

export const Header = () => {
  return (
    <header className={styled.header}>
      {DATA_HEADER_ITEM.map((item) => {
        return <HeaderItem company={item} key={item.id} />;
      })}
    </header>
  );
};
