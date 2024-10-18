import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Signup'; 
import Login from './Login'; 
import ResetPassword from './ResetPassword'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);

