import {FormPage} from './page/Form-page/form-page.component';
import {FormValueProvider} from './context/FormValueContext';
import {TypeOfComplaintsProvider} from './context/TypeOfComplaint';
import {ListOfReservationsProvider} from './context/ListOfReservationsContext';
import {Outlet} from 'react-router-dom';

export function App() {
  return (
    <>
      <TypeOfComplaintsProvider>
        <FormValueProvider>
          <ListOfReservationsProvider>
            <Outlet />
          </ListOfReservationsProvider>
        </FormValueProvider>
      </TypeOfComplaintsProvider>
    </>
  );
}
