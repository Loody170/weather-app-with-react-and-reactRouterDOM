import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route 
} from "react-router-dom"

import Layout from './pages/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import About from './pages/About';


import './index.css';

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />

      </Route>

    </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)

