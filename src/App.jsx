import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ParentRender from './Layout/ParentRender'
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact'
import "./i18n"; // must import once

// Services pages 
import Submersible from './Pages/Submersible/Submersible';
import Monoblock from "./Pages/Monoblock/Monoblock";
import HomeMotors from "./Pages/HomeMotors/HomeMotors";

import Generator from "./Pages/Generator/Generator";
import Engine from "./Pages/Engine/Engine";

// 404 page 
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import SocialFloat from './components/SocialFloat/SocialFloat';
import BackToTopButton from "./components/BackToTopButton/BackToTopButton"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent Layout (Navbar + Footer + Outlet) */}
        <Route path='/' element={<ParentRender />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<Contact />} />

          {/* services routes  */}
      <Route path="/services/submersible" element={<Submersible />} />
      <Route path="/services/monoblock" element={<Monoblock />} />
      <Route path="/services/home-motors" element={<HomeMotors />} />
      <Route path="/services/generator" element={<Generator />} />
      <Route path="/services/engine" element={<Engine />} />
      
      </Route>
      <Route path='*' element={<NotFoundPage/>} />
      </Routes>
      <SocialFloat/>
      <BackToTopButton/>
    </BrowserRouter>
  )
}

export default App
