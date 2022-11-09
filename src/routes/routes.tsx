import { Route, Routes } from "react-router-dom";
import { AboutUsPage } from "../Pages/AboutUsPage";
import { DashboardClient } from "../Pages/DashboardClient";
import { DashboardWorker } from "../Pages/DashboardWorker";
import { Historic } from "../Pages/Historic";
import { LandingPage } from "../Pages/LandingPage";
import { Location } from "../Pages/LocationPage";
import { LoginPage } from "../Pages/LoginPage";
import { NotFound } from "../Pages/NotFound";
import { ProfilePage } from "../Pages/ProfilePage";
import { Register } from "../Pages/registerPage";
import { RegisterProfessional } from "../Pages/registerProfessional";
import { Wallet } from "../Pages/Wallet";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/client-register" element={<Register />} />
      <Route path="/worker-register" element={<RegisterProfessional />} />
      <Route path="/dashboard" element={<DashboardClient />} />
      <Route path="/dashboard-worker" element={<DashboardWorker />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/location" element={<Location />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/historic" element={<Historic />} />
    </Routes>
  );
};

export default RoutesMain;
