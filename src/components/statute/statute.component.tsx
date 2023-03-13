import styled from './statute.module.scss';

export const Statute = () => {
  return (
    <div className={styled.statue}>
      <ol>
        <li>
          Administratorem Pani/Pana danych osobowych jest GG Stores Sp. z o.o.
          sp.k. Adres: GG Stores. Królowej Jadwigi 98. 30-209 Kraków. (POLSKA).
          NIP: 6772428876 Autoryzowany salon Xiaomi Mi Store Centrum Posnania,
          ul. Pleszewska 1 61-136 Poznań, Tel: 575 228 665, E-mail:
          poznan@mi-store.pl
        </li>
        <li>
          Dane osobowe przetwarzane są w celu obsługi składanych reklamacji na
          podstawie art. 6 ust. 1 lit. b ogólnego rozporządzenia o ochronie
          danych.
        </li>
        <li>
          Odbiorcami danych będą osoby upoważnione przez administratora,
          podmioty przetwarzające, z którymi zawarliśmy odpowiednie umowy
          powierzenia oraz podmioty, którym udostępniane są dane wynikające z
          przepisu prawa.
        </li>
        <li>
          Dane osobowe będą przechowywane przez okres wymagany przepisami prawa.
        </li>
        <li>
          Podanie przez Pana/Panią danych osobowych jest warunkiem obsługi
          składanej reklamacji. Jest Pani/Pan zobowiązana/y do ich podania, a
          konsekwencją niepodania danych osobowych brak rozpatrzenia reklamacji.
        </li>
      </ol>
      <ol className={styled.info}>
        Szanowny Użytkowniku,
        <br />
        <li>
          <span className={styled.bold}>
            Wszelkie dane przechowywane (zapisane) w urządzeniu w tym m.in.
            zdjęcia, lista kontaktów, nagrania, zawartość aplikacji, karta
            pamięci powinny zostać usunięte przed przekazaniem urządzenia do
            serwisu. informujemy, iż w trakcie dokonywania czynności
            serwisowych, naprawy lub wymiany wadliwego lub uszkodzonego
            urządzenia, mogą ulec utracie, uszkodzeniu lub zniszczeniu treści
            lub dane przechowywane (zapisane) w urządzeniu. Informujemy, że nie
            posiadamy w swojej ofercie usługi kopiowania/odzyskiwania danych
            zapisanych w pamięci urządzeń.{' '}
          </span>
        </li>
        <li>
          Czynności serwisowe prowadzone przez serwis mogą wymagać demontażu
          zabezpieczenia ekranu w postaci folii lub szkieł ochronnych bez
          możliwości ponownego ich montażu. Za zdemontowane ochrony ekranu nie
          ponoszą odpowiedzialności serwis oraz Xiaomi Store.
        </li>
        <li>
          <span className={styled.bold}>
            W przypadku zgłoszenia urządzenia w celu naprawy i braku akceptacji
            kosztorysu naprawy, a także w celu samej diagnozy dla poznania
            kosztorysu naprawy zobowiązuję się do pokrycia kosztów ekspertyzy
            technicznej oraz transportu urządzenia w kwocie 89 zł. Kwota nie
            zostanie naliczona, gdy zgłaszający zaakceptuje kosztorys naprawy i
            podjęta zostanie płatna naprawa urządzenia.
          </span>
        </li>
      </ol>
    </div>
  );
};
