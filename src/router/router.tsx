import {createBrowserRouter} from 'react-router-dom';
import {HomePage} from '../page/Home-page/home.component';
import {FormPage} from '../page/Form-page/form-page.component';
import {App} from '../App';
import {CalculatorPage} from '../page/Calculator-page/calculator-page.component';
import {ListPage} from '../page/List-page/List.component';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/form',
        element: <FormPage />,
      },
      {
        path: '/calc',
        element: <CalculatorPage />,
      },
      {
        path: '/listPage',
        element: <ListPage />,
      },
    ],
  },
]);
