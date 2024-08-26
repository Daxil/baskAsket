import React from 'react'
import images from './img.js' // Import images object
import { Link, Routes, Route } from 'react-router-dom'; // Import React Router

function header() {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-4">
          <img src={images.logo} width="300px" height="40px" />
        </span>
      </Link>
      <ul className="nav nav-pills">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Казань</a>
        <li className="nav-item">
          <Link to="/Login" className="nav-link">
            <img src={images.icon} width="30px" height="25px" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default header;
