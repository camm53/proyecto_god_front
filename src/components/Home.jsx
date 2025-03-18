import React from 'react';
import Header from "./header";
import Hometop from "./hometop";
import AdSection from "./adsection";
import Homeservicios from "./homeservicios";
import Footer from "./footer";
import ContactCard from './Contactcard';

function Home() {
  return (
    <div>
      <Header />
      {/* Contenedor principal con padding-top para dejar espacio al header fijo */}
      <div className="">
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
