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
      console.log(response.data)
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
              <CardClient Id={element.id} key={element.id} Name = {element.Job.Job_Name} Description={element.Job.Description} Categoty = {element.Job.Categoty} lat = {element.Job.lat} lng = {element.Job.lnt}/>
            ))

          }

        </div>
      </StyledDashboard>
    </>
  );
};
