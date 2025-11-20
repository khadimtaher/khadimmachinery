
import React from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';


function ParentRender() {
  return (
    <>

      <Navbar />

      <div style={{ marginTop: "70px" }}>
        <Outlet />
      </div>
      <Footer />

    
             

    
    </>
  )
}

export default ParentRender