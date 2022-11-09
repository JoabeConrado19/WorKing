import { useContext, useEffect, useState } from "react";
import { StyledForm } from "../../styles/StyledClientDash";
import { DashboardContext } from "../../contexts/dashboard";
import { StyledButton } from "../../styles/StyledButton";
import api from "../../services/api";
import { StyledContactModal } from "./StyledModal";

export default function ContactModal({clientId}:any){

    const {openModal, setOpenModal}:any = useContext(DashboardContext)
    const [clientData, setClientData]:any = useState(null)

    console.log(clientId)
    useEffect(() => {
      const getUsers = async () => {
        const {data} = await api.get(`users/${clientId}`);
        setClientData(data)
          console.log(data)
      }

      
      try {
        if(clientId){
          getUsers()
        }
      } catch (error) {
        console.log(error)
      }
      
    }, [openModal])

    return (
        <StyledContactModal open={openModal? "flex" : "none"}>
            <div className="modalHeader">
              <h3>Contato</h3>
              <button className="modalClose" onClick={() => setOpenModal(false)}>x</button>
            </div>
            <main>
              <figure>
                <img src={clientData?.profile_pic} alt="User image" />
              </figure>
              <div>
                <h3>{clientData?.name}</h3>
                <h4>Telefone ou Celular</h4>
                <p>{clientData?.contact}</p>
                <h4>Email</h4>
                <p>{clientData?.email}</p>                
              </div>
            </main>
        </StyledContactModal>
    );
}