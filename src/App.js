import React, { useState, useEffect } from "react";
import './App.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import images from './components/img.js';
import header from './components/header.js';
import Card from './components/card.js';
import Reg from './components/reg.js';
import menu from './components/menu.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login.js';
import Choise from './components/choise.js';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import LoadingScreen from './components/LoadingScreen.js';

function Header() {
  return header();
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showChoice, setShowChoice] = useState(false);
  const [showMap, setShowMap] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const handleToggleChoice = () => {
    setShowMap(prev => !prev); // Переключаем видимость карты
    setShowChoice(prev => !prev); // Переключаем видимость Choise
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <main>
                  <div className="row">
                    <div className="col">
                      {menu()}
                      <Card onToggleChoice={handleToggleChoice} /> 
                    </div>
                    <div className="col main-info">
                      {showMap && (
                        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                          <GoogleMap
                            mapContainerStyle={{ height: "400px", width: "100%" }}
                            center={{ lat: 55.7558, lng: 37.6173 }} // Координаты центра карты
                            zoom={10}
                          >
                            <Marker position={{ lat: 55.7558, lng: 37.6173 }} />
                          </GoogleMap>
                        </LoadScript>
                      )}
                      {showChoice && <Choise />}
                    </div>
                  </div>
                </main>
              </>
            } />
            <Route path="/Login" element={<Login />} />
            <Route path="/Reg" element={<Reg />} />
          </Routes>
        </div>
      </BrowserRouter>

      {isLoading && (
        <LoadingScreen />
      )}
    </div>
  );
}

export default App;
