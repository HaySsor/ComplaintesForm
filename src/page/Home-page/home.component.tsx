import styled from './home.module.scss'
import { Link } from 'react-router-dom'



export const HomePage = () =>{

    return (
        <div className={styled.homeBox}>
            <h1 className={styled.title}>Centrum Dowodzenia </h1>
            <div className={styled.linkBox}>
                <Link to='./form' className={styled.link}> Reklamacje</Link>
                <Link to='/calc' className={styled.link}> Kalkulator</Link>
            </div>
        </div>
    )

}