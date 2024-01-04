import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About } from './about/about';
import { Contacts } from './contacts/contacts';
import { Gallery } from './photogallery/photogallery';
import { Home } from './home/home';
import { Portfolio } from './portfolio/portfolio';
import { Navigation } from './navigation/navigation';
import './app.module.css'

export const App = () => {
  return (
    <>
      <Navigation/>
       <main>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/photogallery' element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />

      </Routes>
      </main>
      </>
  );
};
