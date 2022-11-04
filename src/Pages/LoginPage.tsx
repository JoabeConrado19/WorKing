import { StyledLoginPage } from "../styles/StyledLoginPage"
import logo from '../assets/logo.png'



import { CgProfile } from "react-icons/cg"
import { MdWorkOutline } from "react-icons/md"
import { BiLogIn } from "react-icons/bi"

import {GoogleLogin} from "@react-oauth/google"
import jwt_decode from "jwt-decode"

import { useNavigate } from "react-router-dom";

export const LoginPage = () => {

    const navigate = useNavigate();

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
                onSuccess={(credentialResponse: any) => {

                    const decode: any = jwt_decode(`${credentialResponse.credential}`)
                    console.log(decode.email)
                    
                }}
                onError={() => {
                    console.log("login failed")
                }}
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