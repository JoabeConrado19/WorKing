import { Routes, Route } from 'react-router-dom';
import { LandingPage } from '../Pages/LandingPage';
import { Register } from '../Pages/registerPage';

const RoutesMain = () => {
        
    return(  
      <Routes >
            <Route path='/' element={ <LandingPage/> } />
            <Route path='/contacts' element={ <h1>Fale conosco</h1> } />
            <Route path='/about-us' element={ <h1>Sobre nós</h1> } />
            <Route path='/register' element={ <Register/> } />
            <Route path='/login' element={ <h1>Login</h1> } />
            <Route path='/dashboard' element={ <h1>Dashboard</h1> } />
            <Route path='*' element={ <h2>Not Found</h2> } />
      </Routes>
    );
}

  export default RoutesMain