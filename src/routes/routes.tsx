import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../Pages/LoginPage";
import { LandingPage } from "../Pages/LandingPage";
import { Register } from "../Pages/registerPage";
import { RegisterProfessional } from "../Pages/registerProfessional";
import { DashboardClient } from "../Pages/DashboardClient";
import { AboutUsPage } from "../Pages/AboutUsPage";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/client-register" element={<Register />} />
      <Route path="/worker-register" element={<RegisterProfessional />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardClient />} />
      <Route path="/contacts" element={<h1>Fale conosco</h1>} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/register" element={<h1>Register</h1>} />
      <Route path="*" element={<h2>Not Found</h2>} />
    </Routes>
  );
};

export default RoutesMain;
