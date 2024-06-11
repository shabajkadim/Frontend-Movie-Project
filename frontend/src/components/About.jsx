import React from 'react';
import '../style/about.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About This Project</h1>
      <p>This project is a simple movie search application using the Online Movie Database API.</p>
      <p>It was created as a learning project to practice building React applications and fetching data from APIs.</p>
      <p>The main features of the application include:</p>
      <ul>
        <li>Searching for movies by name</li>
        <li>Viewing movie details such as title, year, and actors</li>
      </ul>
      <p>Technologies used in this project:</p>
      <ul>
        <li>React.js for building the user interface</li>
        <li>Axios for making HTTP requests to the API</li>
        <li>React Router for handling navigation between pages</li>
        <li>CSS for styling the components</li>
      </ul>
      <p>Feel free to explore the code on GitHub or contribute to the project!</p>
      <p>If you have any questions or suggestions, please don't hesitate to contact us.</p>
    </div>
  );
}

export default About;
