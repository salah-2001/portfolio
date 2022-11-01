import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Project from './routes/Project';

function App() {
  return (
    <BrowserRouter>
            <Routes>
              <Route path="/ReactPortfolio" element={<Home/>} />
              <Route path="/project" element={ <Project/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
     </BrowserRouter>
  );
}

export default App;
