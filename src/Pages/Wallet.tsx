import { Body } from "../Components/AboutUsPage/body";
import { AsideComponent } from "../Components/AboutUsPage/aside";
import { useState } from "react";
import { StyledWallet } from "../styles/StyledWallet";
import { BiTransfer } from "react-icons/bi"



export const Wallet = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Body>
      <AsideComponent setMenu={setMenu} menu={menu} />
    
      <StyledWallet>
            <div className="containerWallet">
              <h1>Carteira</h1>
              <div className="divSaldo_Transferencia">
                  <h3>Saldo: Em breve</h3>
                  <button className="btTransferir"><BiTransfer/>Transferir</button>
              </div>
              <div className="Transacoes">
                <h1>Transações</h1>

                <div className="CardTransacao">
                  <div className="descricaoCard">
                      <p>Titulo serviço</p>
                       <span>Descrição do serviço:</span>
                  </div>
                  <div className="descricaoCard">
                       <p>Valor do serviço</p>
                      <span>Valor: 150 R$</span>
                  </div>
                
                 
                </div>
              </div>
            </div>
      </StyledWallet>

    </Body>
  );
};
