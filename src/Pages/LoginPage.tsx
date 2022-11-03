import { StyledLoginPage } from "../styles/StyledLoginPage"
import logo from '../assets/logo.png'

import GoogleLogin from "react-google-login"

import { CgProfile } from "react-icons/cg"
import { MdWorkOutline } from "react-icons/md"
import { BiLogIn } from "react-icons/bi"


export const LoginPage = () => {

 

    return (
        <StyledLoginPage>
            <figure>
                <img src={logo} alt="" />
            </figure>
            <div className="divContainer">
                <form>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Senha" />
                </form>
              <div className="divLabelBt">
                <label htmlFor="btEntrar">
                    Entrar
                </label>
                <button id="btEntrar"><BiLogIn/></button>
                <GoogleLogin 
                clientId="410594899869-69sd1n6fm1156pj0mf7rc99sskgsu2ub.apps.googleusercontent.com"
                buttonText="Login com Google"
                />    
              </div>
            <span className="spanJaRegistrado">Ainda não possui registro? Clique abaixo</span>
            
            
            <div className="divBtsNavigate">
                <div className="divRegistros">
                     <span className="spanRegistroProf">Profissional</span>
                    <button><MdWorkOutline/></button>
                </div>
                <div className="divRegistros">
                  <span className="spanRegistroCliente">Cliente</span>
                     <button><CgProfile/></button> 
                </div>
                
            </div>
            </div>
           
        </StyledLoginPage>
    )
}