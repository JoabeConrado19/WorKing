import { CardClient } from "../Components/CardClient/index";
import { StyledDashboard } from "../styles/dashboardWorker";
import { AsideComponent } from "../Components/AboutUsPage/aside";
import api from "../services/api";
import { useContext, useEffect, useState } from "react";
import { CardStyled } from "../Components/CardClient/style";
import ContactModal from "../Components/ContactModal";
import { DashboardContext } from "../contexts/dashboard";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {SlMagnifier} from "react-icons/sl"
import { InputSearch } from "../Components/InputSearch";


export const DashboardWorker = () => {
  const Navigate = useNavigate()
  const [jobs, setJobs] = useState([]);


  const { clientId} = useContext(DashboardContext)


  useEffect( () => {
     api.get("/jobs").then((response) => {
      
      setJobs(response.data);
      console.log(response.data)
    });
  },[]);



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
        if(response.status !== 200){
            toast.error("Limite de tempo expirado, faça o login novamente!", { autoClose: 3000 })
            Navigate("/login")
        }
        else if(response.data.user_type === "client"){
          Navigate("/dashboard")


        }
        
    })
    .catch((err) => Navigate("/login"));
  },[])


  return (
    <>
      <AsideComponent/>
      <StyledDashboard>
          <InputSearch/>
        <ContactModal clientId={clientId}/>
        <div className="headerMain">
          <h3>Lista de oportunidades</h3>
        </div>
        <div className="listCard">
          {
            jobs.map(element => (
              <CardClient clientId={element.userId} key={element.id} Name = {element.Job.Job_Name} Description={element.Job.Description} Categoty = {element.Job.Categoty} lat = {element.Job.lat} lng = {element.Job.lnt}/>
            ))
          }

        </div>
      </StyledDashboard>
    </>
  );
};
