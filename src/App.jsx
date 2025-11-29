import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ParentRender from './Layout/ParentRender';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';

import Submersible from './Pages/Submersible/Submersible';
import Monoblock from "./Pages/Monoblock/Monoblock";
import HomeMotors from "./Pages/HomeMotors/HomeMotors";
import Generator from "./Pages/Generator/Generator";
import Engine from "./Pages/Engine/Engine";

import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import SocialFloat from './components/SocialFloat/SocialFloat';
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import Terms from './Pages/Terms/Terms';





function App() {
  const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
  // Testing ke liye yeh line laga do
  const timer = setTimeout(() => {
    setIsLoading(false);
    // localStorage.removeItem('hasVisited'); // ← ye bhi laga do test mein
  }, 4000);
  return () => clearTimeout(timer);
}, []);

  // Loader Shown First
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ParentRender />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />

          {/* Services Nested Routes */}
          <Route path="/services/submersible" element={<Submersible />} />
          <Route path="/services/monoblock" element={<Monoblock />} />
          <Route path="/services/home-motors" element={<HomeMotors />} />
          <Route path="/services/generator" element={<Generator />} />
          <Route path="/services/engine" element={<Engine />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          
        </Route>
        
        <Route path="*" element={<NotFoundPage />} />
        

      </Routes>
       
      {/* Show only after loader */}
      <SocialFloat />
      <BackToTopButton/>
      
    </BrowserRouter>
  );
}

export default App;
