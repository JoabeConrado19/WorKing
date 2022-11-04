import { CardClient } from "../components/CardClient/index";
import { StyledDashboard } from "../styles/dashboardWorker";
import { Header } from "../components/Header/index";

import api from "../services/api";
import { useEffect } from "react";
import { AsideComponent } from "../Components/AboutUsPage/aside";

export const DashboardWorker = () => {
    useEffect(()=>{
        api
        .get("/jobs")
        .then((response: any) => {
            console.log(response)
      })
    },[])
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
          <CardClient />
          <CardClient />
          <CardClient />
          <CardClient />
          <CardClient />
          <CardClient />
        </div>
      </StyledDashboard>
    </>
  );
};
