import React from 'react';


//import { Header } from './header/header';
import './app.module.css'
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import About from './about/about';
import { Route, Routes } from 'react-router-dom';
import Gallery from './gallery/gallery';
import Portfolio from './portfolio/portfolio';
import Contacts from './contacts/contacts';
import Home from './home/home';
import Layout from './outlet/outlet.jsx';


export const App = () => {
  return (
    <>
      <Provider store={store}>

        <Routes>
         <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/gallery' element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>

        
        </Provider>
      </>
  );
};
