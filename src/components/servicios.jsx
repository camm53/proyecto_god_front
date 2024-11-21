import React from 'react';
import Button from "./button";
import Header from "./header";
import Hometop from "./hometop";
import Homeservicios from "./homeservicios";
import Footer from "./footer";
import ContactCard from './Contactcard';
import Topservicios from './topservivios';

function servicios() {
  return (
    <div class="min-h-screen flex flex-col">
      <ContactCard/>
      <Header className="pt-[4.75rem] lg:pt-[5.25rem]" />
      
      <Topservicios/>
      
      <Footer className="mt-auto " />
    </div>
  );
}

export default servicios;