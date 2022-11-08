import { Route, Routes } from "react-router-dom";
import { DashboardClient } from "../Pages/DashboardClient";
import { LandingPage } from "../Pages/LandingPage";
import { Register } from "../Pages/registerPage";
import { RegisterProfessional } from "../Pages/registerProfessional";
import { LoginPage } from "../Pages/LoginPage";
import { AboutUsPage } from "../Pages/AboutUsPage";
import { Location } from "../Pages/LocationPage";
import { DashboardWorker } from "../Pages/DashboardWorker";
import { ProfilePage } from "../Pages/ProfilePage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/client-register" element={<Register />} />
      <Route path="/worker-register" element={<RegisterProfessional />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardClient />} />
      <Route path="/dashboard-worker" element={<DashboardWorker />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/location" element={<Location />} />
      <Route path="/contacts" element={<h1>Fale conosco</h1>} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/register" element={<h1>Register</h1>} />
      <Route path="*" element={<h2>Not Found</h2>} />
    </Routes>
  );
};

export default RoutesMain;
