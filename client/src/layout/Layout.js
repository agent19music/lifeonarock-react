import React from 'react';
import '../App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className=''>
      <Navbar />
      <div id='main-container' className='container mx-auto'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
