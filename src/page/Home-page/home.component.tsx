import styled from './home.module.scss'
import { Link } from 'react-router-dom'
import { Form } from '../../components/form/form.component'
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';


export const HomePage = () =>{

    return (
        <div className={styled.homeBox}>
            <h1 className={styled.title}>Centrum <br />Dowodzenia </h1>
            <div className={styled.linkBox}>
                <Link to='./form' className={styled.link}> Reklamacje</Link>
                <Link to='/calc' className={styled.link}> Kalkulator</Link>
                <Link to='/listPage' className={styled.link}> Lista Rezerwacji</Link>
            </div>
        </div>
        
    )

}