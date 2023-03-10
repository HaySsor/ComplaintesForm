import {FormPage} from './page/Form-page/form-page.component';
import {NameProvider} from './context/NameContext';
import {Outlet} from 'react-router-dom';

export function App() {
  return (
    <>
      <NameProvider>
        <Outlet />
      </NameProvider>
    </>
  );
}
