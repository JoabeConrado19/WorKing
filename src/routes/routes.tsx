import { Routes, Route, Navigate } from 'react-router-dom';
import { Register } from '../pages/registerPage';
import { RegisterProfessional } from '../pages/registerProfessional';


const RoutesMain = () => {
        
    return(  <Routes >
          <Route path='/' element={ <h1>LandingPage</h1> } />
          <Route path='/client-register' element={ <Register/> } />
          <Route path='/worker-register' element={ <RegisterProfessional/> } />
          <Route path='/login' element={ <h1>Login</h1> } />
          <Route path='/dashboard' element={ <h1>Dashboard</h1> } />
          <Route path='*' element={ <h2>Not Found</h2> } />

      </Routes>)
  
}

  export default RoutesMain