import { useContext, useEffect, useState } from "react";
import { AsideComponent } from "../Components/AboutUsPage/aside";
import { CardClient } from "../Components/CardClient/index";
import { Header } from "../Components/Header/index";
import { DashboardContext } from "../contexts/dashboard";
import { StyledDashboard } from "../styles/dashboardWorker";

export const DashboardWorker = () => {
  const [jobs, setJobs] = useState([]);
  const { setWorkers, workers, workerSearch, setWorkerSearch, searchWorkFilter, filteredWorkProducts, setFilteredWorkProducts, getWorkInfo } = useContext(DashboardContext)




  useEffect(() => {
    getWorkInfo()
  }, [])




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
            workerSearch.length > 0 ?
              filteredWorkProducts.map(element => (
                <CardClient Id={element.id} key={element.id} Name={element.Job.Job_Name} Description={element.Job.Description} Categoty={element.Job.Categoty} lat={element.Job.lat} lng={element.Job.lnt} />
              ))
              :
              workers.map(element => (
                <CardClient Id={element.id} key={element.id} Name={element.Job.Job_Name} Description={element.Job.Description} Categoty={element.Job.Categoty} lat={element.Job.lat} lng={element.Job.lnt} />
              ))
          }

        </div>
      </StyledDashboard>
    </>
  );
};
