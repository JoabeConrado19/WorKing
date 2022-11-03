import {  Routes, Route, Navigate } from 'react-router-dom';
// import { Navibar }  from "../Components/Sidebar"
import { Register } from '../Pages/registerPage';
import { RegisterProfessional } from '../Pages/registerProfessional';
import { LandingPage } from '../Pages/LandingPage';
import { DashboardWorker } from '../Pages/DashboardWorker';


const RoutesMain = () => {

  return (
  <Routes >
    <Route path='/' element={<LandingPage />} />
    <Route path='/client-register' element={<Register />} />
    <Route path='/worker-register' element={<RegisterProfessional />} />
    <Route path='/login' element={<h1>Login</h1>} />
    <Route path='/register' element={<h1>Register</h1>} />
   
    <Route path='/dashboard-worker' element={<DashboardWorker />} />
    <Route path='/contacts' element={<h1>Fale conosco</h1>} />
    <Route path='/about-us' element={<h1>Sobre nós</h1>} />
    
    <Route path='*' element={<h2>Not Found</h2>} />

  </Routes>)

}

export default RoutesMain