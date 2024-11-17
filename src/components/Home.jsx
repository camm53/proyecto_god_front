import React from 'react';
import Button from "./button";
import Header from "./header";
import Hometop from "./hometop";
import Homeservicios from "./homeservicios";
import Footer from "./footer";
import ContactCard from './Contactcard';

function Home() {
  return (
    <div>
      <ContactCard/>
      <Header className="pt-[4.75rem] lg:pt-[5.25rem]" />
      <Hometop />
      <Homeservicios />
      <Footer />
    </div>
  );
}

export default Home;
