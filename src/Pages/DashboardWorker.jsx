import { CardClient } from "../Components/CardClient/index";
import { StyledDashboard } from "../styles/dashboardWorker";
import { AsideComponent } from "../Components/AboutUsPage/aside";
import api from "../services/api";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../contexts/dashboard";
import {SlMagnifier} from "react-icons/sl"
import { InputSearch } from "../Components/InputSearch";

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
      <AsideComponent/>
      <StyledDashboard>
        <InputSearch/>
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
