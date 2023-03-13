import {FormPage} from './page/Form-page/form-page.component';
import {FormValueProvider} from './context/FormValueContext';
import {TypeOfComplaintsProvider} from './context/TypeOfComplaint';
import {Outlet} from 'react-router-dom';

export function App() {
  return (
    <>
      <TypeOfComplaintsProvider>
        <FormValueProvider>
          <Outlet />
        </FormValueProvider>
      </TypeOfComplaintsProvider>
    </>
  );
}
