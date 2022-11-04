import { Route, Routes } from "react-router-dom";
import { AboutUsPage } from "../Pages/AboutUsPage";
import { DashboardClient } from "../Pages/DashboardClient";
import { LandingPage } from "../Pages/LandingPage";
import { Register } from "../Pages/registerPage";
import { RegisterProfessional } from "../Pages/registerProfessional";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/client-register" element={<Register />} />
      <Route path="/worker-register" element={<RegisterProfessional />} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/dashboard" element={<DashboardClient />} />
      <Route path="/contacts" element={<h1>Fale conosco</h1>} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/register" element={<h1>Register</h1>} />
      <Route path="*" element={<h2>Not Found</h2>} />
    </Routes>
  );
};

export default RoutesMain;
