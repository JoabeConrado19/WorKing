import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AsideComponent } from "../Components/AboutUsPage/aside";
import { CardClient } from "../Components/CardClient/index";
import ContactModal from "../Components/ContactModal";
import { Header } from "../Components/Header";
import { DashboardContext } from "../contexts/dashboard";
import api from "../services/api";
import { StyledDashboard } from "../styles/dashboardWorker";


export const DashboardWorker = () => {
  const Navigate = useNavigate()
  const [jobs, setJobs] = useState([]);
  const { setWorkers, workers, workerSearch, setWorkerSearch, searchWorkFilter, filteredWorkProducts, setFilteredWorkProducts, getWorkInfo } = useContext(DashboardContext)




  useEffect(() => {
    getWorkInfo()
  }, [])





  const { clientId } = useContext(DashboardContext)


  useEffect(() => {
    api.get("/jobs").then((response) => {

      setJobs(response.data);
      console.log(response.data)
    });
  }, []);



  useEffect(() => {
    let Token = window.localStorage.getItem("@WorkingUser_Token")
    let Id = window.localStorage.getItem("@WorkingUser_Id")
    api
      .get(`/users/${Id}`, {

        headers: {
          Authorization: `Bearer ${Token}`
        }

      })
      .then((response) => {
        if (response.status !== 200) {
          toast.error("Limite de tempo expirado, faça o login novamente!", { autoClose: 3000 })
          Navigate("/login")
        }
        else if (response.data.user_type === "client") {
          Navigate("/dashboard")


        }

      })
      .catch((err) => Navigate("/login"));
  }, [])


  return (
    <>
      <AsideComponent />
      <StyledDashboard>
        <Header />
        <ContactModal clientId={clientId} />
        <div className="headerMain">
          <h3>Lista de oportunidades</h3>
        </div>
        <div className="listCard">


          {
            workerSearch.length > 0 ?
              filteredWorkProducts.map(element => (
                <CardClient Id={element.id} clientId={element.userId} key={element.id} Name={element.Job.Job_Name} Description={element.Job.Description} Category={element.Job.Categoty} lat={element.Job.lat} lng={element.Job.lnt} />
              ))
              :
              workers.map(element => (
                <CardClient Id={element.id} clientId={element.userId} key={element.id} Name={element.Job.Job_Name} Description={element.Job.Description} Category={element.Job.Category} lat={element.Job.lat} lng={element.Job.lnt} />
              ))
          }

        </div >
      </StyledDashboard >
    </>
  );
};
