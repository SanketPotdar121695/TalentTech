import React from 'react';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Practice from './Practice';
import Dashboard from './Dashboard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PrivateRoute from '../hoc/PrivateRoute';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from '../utils/PageNotFound';

const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/practice'
          element={
            <PrivateRoute>
              <Practice />
            </PrivateRoute>
          }
        />
        <Route
          path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default AllRoutes;
