
import { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import User from './components/User';
import NotFound from './components/NotFound';
import Products from './components/Products';

function App() {

  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/contact"> Contact </Link>
          <Link to="/about"> About </Link>
          <Link to="/home"> Home </Link>
          <Link to="/user/1"> User 1 </Link>
          <Link to="/user/2"> User 2 </Link>
          <Link to="/products?page=1"> page 1 </Link>
          <Link to="/products?page=2"> page 2 </Link>

        </ul>
      </nav>
      <Routes>
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
        <Route path='home' element={<Home />} />
        <Route path='user/:id' element={<User />} />
        <Route path='*' element={<NotFound />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;  