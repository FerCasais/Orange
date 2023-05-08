import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import Nosotros from "./Nosotros/Nosotros";
import Planes from "./Planes/Planes";
import VideoTour from "./VideoTour/VideoTour";
import PreguntasFrecuentes from "./PreguntasFrecuentes/PreguntasFrecuentes";
import React from "react";
import Menu from "./Menu/Menu";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Caracteristicas from "./Caracteristicas/Caracteristicas";
import Footer from "./Footer/Footer";
import ResponsiveHook from "./ResponsiveHook.jsx/ResponsiveHook";




function App() {


  return ( 
    <>

 
 
    
    <BrowserRouter>
    
    <Header/>
   
    <Menu/>

    <Routes>
      <Route path="/" element={  <Main/>}  />
      <Route path="/nosotros" element={ <Nosotros/>}  />
      <Route path="/planes" element={ <Planes/>}  />
      <Route path="/caracteristicas" element={ <Caracteristicas/>}  />
      <Route path="/videoTour" element={ <VideoTour/>}  />
      <Route path="/preguntasFrecuentes" element={ <PreguntasFrecuentes/>}  />

      <Route path="*" element={<Navigate to = "/" />} />
   </Routes>
    
   
 
     
      
   
</BrowserRouter>
<Footer/>

 
    </>
  );
}

export default App;
