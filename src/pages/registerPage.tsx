import { RegisterStyles } from "../styles/register";
import RegisterLogo from "../assets/RegisterLogo.svg" ;
import RegisterBtnIco from "../assets/RegisterBtnIco.svg";

export const Register = () => {
  return (
    <RegisterStyles>
      <main>
        <figure>
          <img src={RegisterLogo} alt="Logo" />
        </figure>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Confirmar Senha" />
          <input type="text" placeholder="Data de Nascimento" />
          <input type="text" placeholder="Link da Foto" />
          <input type="text" placeholder="Contato" />
          <p>Registrar</p>
          <button><img src={RegisterBtnIco} alt="" /></button>
        </form>
      </main>
    </RegisterStyles>
  );
};