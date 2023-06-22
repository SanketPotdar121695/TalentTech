import React from 'react';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Practice from './Practice';
import Dashboard from './Dashboard';
import PrivateRoute from '../hoc/PrivateRoute';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from '../utils/PageNotFound';

const AllRoutes = () => {
  return (
    <div>
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
      </Routes>
      <Route path='*' element={<PageNotFound />} />
    </div>
  );
};

export default AllRoutes;
