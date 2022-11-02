import { StyledLoginPage } from "../styles/StyledLoginPage"
import logo from "../assets/Logo.svg"
import entrarIcon from "../assets/EntrarIcon.svg"
import { CgProfile } from "react-icons/cg"
import { MdWorkOutline } from "react-icons/md"


export const LoginPage = () => {
    return (
        <StyledLoginPage>
            <figure>
                <img src={logo} alt="" />
            </figure>
             <form>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha" />
            </form>
            <div className="divLabelBt">
                <label htmlFor="btEntrar">
                    Entrar
                </label>
                <button id="btEntrar"><img src={entrarIcon} alt="" /></button>    
            </div>
            <span className="spanJaRegistrado">Ainda não possui registro ? Clique abaixo</span>
            
            
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
        </StyledLoginPage>
    )
}