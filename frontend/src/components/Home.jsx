import React from 'react';
import { Link } from 'react-router-dom';
import '../style/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Movie Search</h1>
      <img className="home-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzJVMxi2xbDbzmZ9W0bG6V2JcKm9BL1wcnftuKBAz9AvSomJIZzqa6A13HE6pRXVnTWaY&usqp=CAU" alt="Default" />
      <Link to="/search" className="search-link">Search for Movies</Link>
    </div>
  );
}

export default Home;
