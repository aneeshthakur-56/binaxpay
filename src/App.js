import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AppRoutes from './routes/AppRoutes';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
      delay: 50,
    });
  }, []);

  return (
    <Router>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      <AppRoutes />
    </Router>
  );
};

export default App;
