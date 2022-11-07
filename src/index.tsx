import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { DashboardProvider } from './contexts/dashboard';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalStyle/>
    <GoogleOAuthProvider clientId='410594899869-69sd1n6fm1156pj0mf7rc99sskgsu2ub.apps.googleusercontent.com'> 
        <DashboardProvider>
        <App />
        </DashboardProvider>
        <ToastContainer autoClose={5000} />
    </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);