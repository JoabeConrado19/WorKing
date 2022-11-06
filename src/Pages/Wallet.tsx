import { Body } from "../Components/AboutUsPage/body";
import { AsideComponent } from "../Components/AboutUsPage/aside";
import { useContext, useEffect, useState } from "react";
import { StyledWallet } from "../styles/StyledWallet";
import { BiTransfer } from "react-icons/bi"
import { DashboardContext } from "../contexts/dashboard";
import { MdMenuOpen } from "react-icons/md";



export const Wallet = () => {
  const { menu, setMenu, verifyToken}:any = useContext(DashboardContext)

  useEffect(()=>{
    verifyToken()
  },[])

  return (
    <Body>
      <AsideComponent />
    
      <StyledWallet>
            <div className="containerWallet">
            <button
                className="btMenuOpen"
                onClick={(event) => {
                  event.preventDefault();
                  setMenu(!menu);
                }}
              >
                <MdMenuOpen  />
              </button>
              <h1>Carteira</h1>
              <div className="divSaldo_Transferencia">
                  <h3>Saldo: Em breve</h3>
                  <div>
                  <button className="btTransferir"><BiTransfer/>Transferir</button>
                  </div>
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
