import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { About } from './about/about';
import { Contacts } from './contacts/contacts';
import { Gallery } from './gallery/gallery';
import { Home } from './home/home';
import { Portfolio } from './portfolio/portfolio';
import { Header } from './header/header';
import './app.module.css'
import { Provider } from 'react-redux';
import { store } from '../redux/store';


export const App = () => {
  return (
    <>
      <Provider store={store}>
      <Header/>
       <main>
        <Routes>
         
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/gallery' element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        
      </Routes>
        </main>
        
        </Provider>
      </>
  );
};
