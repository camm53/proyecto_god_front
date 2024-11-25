import React from 'react'
import Section from './section'
import homeimage from "../myassets/setecalogo.png";
import Button from "./button";
import ContactCard from './Contactcard';
import { servicios } from '../constants';
import { useSearchParams } from 'react-router-dom';
import { useNavigate,  } from 'react-router-dom';
import { useState, useEffect } from 'react';





const topservicios = () => {
  const servicioss = servicios.filter(service => !service.onlyMobile);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    // Get the service ID from the URL query parameters
    const serviceId = searchParams.get("id");

    // Find the service in the JSON data
    if (serviceId) {
      const service = servicioss.find(
        (servicio) => servicio.id.toString() === serviceId
      );

      // Set the selected service or redirect if not found
      if (service) {
        setSelectedService(service);
      } else {
        navigate("/servicios?id=1", { replace: true });
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    } else {
      // Redirect to the default service if no ID is provided
      navigate("/servicios?id=1", { replace: true });
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [searchParams, navigate]);

  const imagenn="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D";
  return (
    <div className=' relative bg-s-3 top-0 '>
     
        <div className=' inset-0 z-2 flex justify-center md:bg-s-6'>
            
            <Section className={"flex w-full h-full  justify-center "} 
            custonPaddings={"py-[6rem] md:py-[7rem] pb-[1.2rem] md:pb-0  "}
            maxw={" "}>
                <div className='flex flex-row md:flex-row flex-1 h-auto  items-center justify-center my-[4rem]  mt-[4.5rem]'>
                  <div className='relative w-2/5 h-[85%] '>
                  <img  src={`${selectedService ? selectedService.imagenhorizontal: imagenn}`} 
                  className={`absolute inset-0  h-full w-full object-cover brightness-90 `} alt="seteca"/>
                  </div>
                  <div className=' w-2/3  bg-s-1 text-s-9 flex justify-center items-center shadow-md' >
                    <div className='mx-20 my-16 min-w-[75%] min-h-[45%] space-y-4 pb-4 '>
                      <div className='mb-3 font-serif text-2xl text-s-9/70'>{selectedService ? (selectedService.title) : ("Cargando...")}</div>
                      <div className='py-4'> {selectedService ? (selectedService.longDescription) : ("Cargando...")}
                      </div>
                      <Button className="w-fit md:flex text-s-1 bg-s-5/95 border-none p-0 hover:bg-s-10 hover:shadow-md" onClick={() => ContactCard.toggle?.()}>
                            Contactanos
                        </Button>
                    </div>
                  </div>
                </div>
            </Section>
            
            
        </div>
        
          
          {/* <div className=" flex flex-wrap items-center justify-center min-w-[100wh] aspect-[5/5.9] md:aspect-[5/3.15]  h-auto  bg-s-6">
            <img  src={"https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D"}  
            className={`h-full w-full object-cover brightness-50 `} alt="seteca"/>
            <div className="absolute inset-0 bg-black/20"></div>
          </div> */}
        
        
    </div>
    
  )
}

export default topservicios