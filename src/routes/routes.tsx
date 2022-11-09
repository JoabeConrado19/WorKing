import { Route, Routes, Navigate } from "react-router-dom";
import { DashboardClient } from "../Pages/DashboardClient";
import { LandingPage } from "../Pages/LandingPage";
import { Register } from "../Pages/registerPage";
import { RegisterProfessional } from "../Pages/registerProfessional";
import { LoginPage } from "../Pages/LoginPage";
import { AboutUsPage } from "../Pages/AboutUsPage";
import { Location } from "../Pages/LocationPage";
import { DashboardWorker } from "../Pages/DashboardWorker";
import { Wallet } from "../Pages/Wallet";
import { NotFound } from "../Pages/NotFound";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/client-register" element={<Register />} />
      <Route path="/worker-register" element={<RegisterProfessional />} />
      <Route path="/dashboard" element={<DashboardClient />} />
      <Route path="/dashboard-worker" element={<DashboardWorker />} />
      <Route path="/location" element={<Location />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/wallet" element={<Wallet />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesMain;
