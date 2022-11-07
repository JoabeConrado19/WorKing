import { CardClient } from "../Components/CardClient/index";
import { StyledDashboard } from "../styles/dashboardWorker";
import { Header } from "../Components/Header/index";
import { AsideComponent } from "../Components/AboutUsPage/aside";
import api from "../services/api";
import { useContext, useEffect, useState } from "react";
import { CardStyled } from "../Components/CardClient/style";
import { DashboardContext } from "../contexts/dashboard";

export const DashboardWorker = () => {
  const [jobs, setJobs] = useState([]);
  const { verifyToken } = useContext(DashboardContext)


  useEffect( () => {
     api.get("/jobs").then((response) => {
      
      setJobs(response.data);
      console.log(response.data)
    });
  },[]);

  useEffect(()=>{
    verifyToken()
  },[])

  return (
    <>
      <AsideComponent />
      <Header />
      <StyledDashboard>
        <div className="headerMain">
          <h3>Lista de oportunidades</h3>
        </div>
        <div className="listCard">
          

          {
           

           
            jobs.map(element => (
              <CardClient Id={element.id} key={element.id} Name = {element.Job.Job_Name} Description={element.Job.Description} Categoty = {element.Job.Categoty} lat = {element.Job.lat} lng = {element.Job.lnt}/>
            ))

          }

        </div>
      </StyledDashboard>
    </>
  );
};
