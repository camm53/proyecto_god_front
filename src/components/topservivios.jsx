import React from 'react'
import Section from './section'
import homeimage from "../myassets/setecalogo.png";
import Button from "./button";
import ContactCard from './Contactcard';


const topservicios = () => {
  const imagenn="https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D";
  return (
    <div className=' relative bg-s-3 top-0 '>
     
        <div className=' inset-0 z-2 flex justify-center md:bg-s-6'>
            
            <Section className={"flex w-full h-full  justify-center "} 
            custonPaddings={"py-[6rem] md:py-[7rem] pb-[1.2rem] md:pb-0  "}
            maxw={" "}>
                <div className='flex flex-row md:flex-row flex-1 h-auto  items-center justify-center my-[4rem]  mt-[4.5rem]'>
                  <div className='relative w-2/5 h-[85%] '>
                  <img  src={imagenn}  
                  className={`absolute inset-0  h-full w-full object-cover brightness-50 `} alt="seteca"/>
                  </div>
                  <div className=' w-2/3  bg-s-1 text-s-9 flex justify-center items-center shadow-md' >
                    <div className='mx-20 my-16 min-w-[75%] min-h-[45%] space-y-4 pb-4 '>
                      <div className='mb-3 font-serif text-2xl text-s-9/70'>Nuestros servicios</div>
                      <div className='py-4'>hola
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
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