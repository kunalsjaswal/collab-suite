import React from 'react'
import { Routes, Route } from "react-router-dom";
import CarouselFile from '../Landingpage/CarouselFile';
import Login from '../Authentication/Login';
import Signup from '../Authentication/Signup';

const RouterPage = () => {
  return (
    <>
        <Routes>
            <Route index element = {<CarouselFile/>}/>
            <Route path='login' element = {<Login/>}/>
            <Route path='signup' element = {<Signup/>}/>
        </Routes>
    </>
  )
}

export default RouterPage