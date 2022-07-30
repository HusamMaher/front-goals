import React from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { Header } from './components/Header';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import HeaderB from './components/header-bootrap/headerB';

function NotFound() {
  return (
    <div className='continer'>
      <h1>not found</h1>
    </div>
  )
}

function App() {
  return (
    <>
      <HeaderB />
      {/* <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='*' exact={true} element={<NotFound />} />
          </Routes>

        </div>
      </Router>
      <ToastContainer /> */}
    </>
  );
}

export default App;
