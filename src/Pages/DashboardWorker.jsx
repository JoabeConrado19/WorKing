import { CardClient } from "../Components/CardClient/index";
import { StyledDashboard } from "../styles/dashboardWorker";
import { Header } from "../Components/Header/index";
import { AsideComponent } from "../Components/AboutUsPage/aside";
import api from "../services/api";
import { useEffect, useState } from "react";
import { CardStyled } from "../Components/CardClient/style";

export const DashboardWorker = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get("/jobs").then((response) => {
      
      setJobs(response.data);
      console.log(jobs)
    });
  },[]);
  return (
    <>
      <AsideComponent />
      <Header />
      <StyledDashboard>
        <div className="headerMain">
          <h3>Lista de oportunidades</h3>
          <button
            className="btnFilter"
            onClick={(event) => {
              event.preventDefault();
            }}
          >
            Filtrar Categoria
          </button>
        </div>
        <div className="listCard">
          

          {
           
            jobs.map(element => (
              <CardClient key={element.Job.job_name} Name = {element.Job.Job_Name} Description={element.Job.Description} Categoty = {element.Job.Categoty}/>
            )
              
              
            )
          }

        </div>
      </StyledDashboard>
    </>
  );
};
