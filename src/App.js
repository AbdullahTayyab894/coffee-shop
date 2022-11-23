import React from 'react';
import Navbar from './component/HamburgerMenu/Navebar';
import Description from './component/description/Description';
import Slider from './component/imgslider/Slider';
import About from './component/about/About';
import Accourdian from './component/accordian/Accourdian';
import Contact from './component/form/Form';
import ActionAreaCard from './component/brand/Card'
import Foter from './component/footer/Footer';
// import SimpleMap from './component/location/Location'
import { Reservetable } from './component/reservetable/Reservetable';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<>
          <Description />
          <Slider />
          <About />
          <Accourdian />
          <ActionAreaCard />
        </>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Reservetable" element={<Reservetable />} />
        {/* <Route path="/location" element={<SimpleMap />} /> */}
      </Routes>
      <Foter />
      <ToastContainer />
    </BrowserRouter>
  );
}
export default App;