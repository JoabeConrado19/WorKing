import { Body } from "../Components/AboutUsPage/body";
import { AsideComponent } from "../Components/AboutUsPage/aside";
import { Main } from "../Components/AboutUsPage/main";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "../contexts/dashboard";

export const AboutUsPage = () => {

  const {verifyToken}:any = useContext(DashboardContext)


  useEffect(()=>{
    verifyToken()
  },[])
  

  return (
    <Body>
      <AsideComponent />
      <Main />
    </Body>
  );
};
