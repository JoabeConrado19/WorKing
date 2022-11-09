import { StyledLandingPage } from '../styles/StyledLandingPage'
import { StyledButton } from '../styles/StyledButton'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import api from '../services/api'



export const LandingPage = () => {

    const Navigate = useNavigate()


    useEffect(()=>{
        let Token = window.localStorage.getItem("@WorkingUser_Token")
        let Id = window.localStorage.getItem("@WorkingUser_Id")
        api
        .get(`/users/${Id}`, {

            headers: {
                Authorization: `Bearer ${Token}`
            }

        })
        .then((response) => {
            if(response.status === 200){
                Navigate("/dashboard")
            }
            
        })


    },[])


  return (
    
    <StyledLandingPage>
        <div className='divMobile'>
            <figure>
                    <img src={require("../assets/WorKingMobile-logo.png")} alt="WorKing logo" />
            </figure>
            <h4>Bem vindo ao <span>WorKing</span>! A melhor plataforma para se conseguir um trabalho de modo rápido, fácil e sem burocracias.</h4>
            <div>
                <p>Entrar</p>
                <Link to='/login'><StyledButton><img src={require("../assets/login-icon.png")} alt="login icon" /></StyledButton></Link>
                
            </div>
            <Link to={'/about-us'}>Sobre Nós</Link>
        </div>
        <header>
        
            <figure>
                <img src={require("../assets/WorKing-logo.png")} alt="WorKing logo" />
            </figure>
            <div className='headerLinks'>
                <Link to={'/about-us'}>Sobre Nós</Link>
            </div>
            <Link to='/login'><StyledButton>Entrar</StyledButton></Link>
           
        </header>
        <main>
            <div className='landingPageTexts'>
                <h1>Bem vindo ao <span>WorKing</span>!</h1>
                <h2>Conectando pessoas</h2>
                <h4>A melhor plataforma para se conseguir um trabalho de modo rápido, fácil e sem burocracias.</h4> 
            </div>
            <figure>
                <img src={require("../assets/LandingPage-img.png")} alt="image of Connected people" />
            </figure>
        </main>
    </StyledLandingPage>
  )
}
