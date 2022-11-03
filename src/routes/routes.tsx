import { Route, Routes } from 'react-router-dom';
import { DashboardClient } from '../Pages/DashboardClient';
import { LandingPage } from '../Pages/LandingPage';
import { Register } from '../Pages/registerPage';
import { RegisterProfessional } from '../Pages/registerProfessional';
import { LoginPage } from '../Pages/LoginPage';
import { Location } from '../Pages/LocationPage';

const RoutesMain = () => {

  return (<Routes >
    <Route path='/' element={<LandingPage />} />
    <Route path='/client-register' element={<Register />} />
    <Route path='/worker-register' element={<RegisterProfessional />} />
    <Route path='/login' element={<LoginPage />} />
    <Route path='/dashboard' element={<DashboardClient />} />
    <Route path='/contacts' element={<h1>Fale conosco</h1>} />
    <Route path='/about-us' element={<h1>Sobre nós</h1>} />
    <Route path='/register' element={<h1>Register</h1>} />
    <Route path='/location' element={<Location/>} />
    <Route path='*' element={<h2>Not Found</h2>} />

  </Routes>)

}

export default RoutesMain