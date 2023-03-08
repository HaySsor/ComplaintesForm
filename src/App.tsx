import styled from './App.module.scss';
import {Header} from './components/header/header.component';
import {Form} from './components/form/form.component';
import {useContext} from 'react';
import {NameContext} from './context/NameContext';
import {Statute} from './components/statute/statute.component';
import {Signature} from './components/signature/signature.component';
function App() {
  const {productName} = useContext(NameContext);
  return (
    <div className={styled.box}>
      <h1 className={styled.title}>Reklamacja {productName}</h1>
      <Header />
      <Form />
      <Statute />
      <Signature />
    </div>
  );
}

export default App;
