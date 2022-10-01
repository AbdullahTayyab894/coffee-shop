import React from 'react';
import Navbar from './component/HamburgerMenu/Navebar';
import Description from './component/description/Description';
import Slider from './component/imgslider/Slider';
import About from './component/about/About';
import Accourdian from './component/accordian/Accourdian';
import Login from './component/form/Form';
import ActionAreaCard from './component/brand/Card'
import Foter from './component/footer/Footer';
import { Reservetable } from './component/reservetable/Reservetable';
import { BrowserRouter, Routes, Route, Fragment } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<>
          <Description />
          <Slider />
          <Accourdian />
          <Login />
          <ActionAreaCard />
        </>} />
        <Route path="/Reservetable" element={<Reservetable />} />
      </Routes>
      <Foter />
    </BrowserRouter>
  );
}
export default App;