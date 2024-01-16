import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SignIn from "./../pages/SingIn/index";
import SignUp from "./../pages/SingUp/index";
import Home from '../pages/Home';
import { PrivateRoute } from './privateRouters';
import Patiences from '../pages/Patients';


export function Router() {
    return (
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />

        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home"  element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/patiences"  element={<PrivateRoute><Patiences /></PrivateRoute>} />
      </Routes>
    );
  }