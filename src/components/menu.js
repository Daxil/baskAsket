import React from 'react'
import images from './img.js' // Import images object

function menu() {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">
        <img src={images.menu} width="40px" height="40px" />
        </a>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Адрес" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Поиск</button>
        </form>
      </div>
    </nav>
  );
}

export default menu
