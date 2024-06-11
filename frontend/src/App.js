
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieSearch from './components/MovieSearch.jsx';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import './style/navbar.css';
import './style/home.css';
import './style/about.css';


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/search">Search</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<MovieSearch />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
