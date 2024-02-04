import React from 'react'
import { Routes, Route } from "react-router-dom";
import CarouselFile from '../landingpage/CarouselFile';
import Login from '../authentication/Login';
import Signup from '../authentication/Signup';
import SetupFile from '../projectsetup/SetupFile';
import UserDashboard from '../dashboard/UserDashboard';

const RouterPage = () => {
  return (
    <>
      <Routes>
        <Route index element={<CarouselFile />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='projectsetup' element={<SetupFile />} />
        <Route path='dashboard' element={<UserDashboard />} />

      </Routes>
    </>
  )
}

export default RouterPage