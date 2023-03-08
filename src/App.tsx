import styled from './App.module.scss';
import {Input} from './components/input/input.component';
import {Header} from './components/header/header.component';
import {Form} from './components/form/form.component';
function App() {
  return (
    <div className={styled.box}>
      <h1 className={styled.title}>Reklamacja</h1>
      <Header />
      <Form />
    </div>
  );
}

export default App;
