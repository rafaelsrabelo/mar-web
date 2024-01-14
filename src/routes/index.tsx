import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignIn from "./../pages/SingIn/index";
import SignUp from "./../pages/SingUp/index";
import Home from '../pages/Home';


export function Router() {
    return (
      <Routes>
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/signup" element={<SignUp />} />

        <Route path="/" element={<Home />} />
      </Routes>
    );
  }