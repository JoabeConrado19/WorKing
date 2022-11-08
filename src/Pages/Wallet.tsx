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
                  <p className="pTransferir"><BiTransfer/>Transferir</p>
              </div>
            </div>
      </StyledWallet>

    </Body>
  );
};
