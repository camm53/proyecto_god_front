import React from 'react';
import Header from "./header";
import Hometop from "./hometop";
import AdSection from "./adsection";
import Homeservicios from "./homeservicios";
import Footer from "./footer";
import ContactCard from './Contactcard';
import api from '/api';


function Home() {
  return (
    <div>
      <Header />
      {/* Contenedor principal; agrega padding-top si es necesario para evitar superposición con el header fijo */}
      <div className="pt-4">
        <ContactCard />
        <AdSection />
        <Hometop />
        <Homeservicios />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
