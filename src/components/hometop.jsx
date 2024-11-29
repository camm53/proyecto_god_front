import React from 'react'
import Section from './section'
import homeimage from "../myassets/setecalogo.png";
import Button from "./button";
import ContactCard from './Contactcard';
import { useNavigate } from 'react-router-dom';


const hometop = () => {
  
  return (
    <div className=' relative bg-s-3 top-0 '>
        <div className='absolute inset-0 z-2 flex justify-center '>
            <Section className={"flex w-full h-full items-center justify-center"} 
            custonPaddings={"py-[6rem] md:py-[7rem] pb-[1.7rem] md:pb-14 px-[1.5rem] md:px-2 md:mx-14 "}>
                <div className='flex flex-col  flex-1 h-full  items-start justify-end'>
                    
                    <div className='w-[85%] md:w-[31rem]  space-y-4 '>
                        <div className=' text-4xl md:text-[4.8rem] py-2 md:py-2 md:leading-[6rem]'>
                        Servicios de Confianzazzzzzzzzzzz
                        </div>
                        <div className='text-xs md:text-base md:leading-loose'>
                        En SETECA ofrecemos soluciones eficientes en mantenimiento, reparaciones y construcción, garantizando calidad y confianza en cada proyecto.
                        </div>
                        
                        <Button className="w-fit md:flex text-s-1  border-white  p-0 bg-transparent hover:bg-s-10 hover:border-s-10 duration-75 " 
                        onClick={() => ContactCard.toggle?.()} px={"px-5"}>
                            Contactanos
                        </Button>
                        
                       
                        
                        
                        
                    </div>
                   
                </div>
            </Section>
            
            
        </div>
        
          
          <div className=" flex flex-wrap items-center justify-center min-w-[100wh] aspect-[5/6.5] md:aspect-[5/3.15]  h-auto  bg-s-6">
            <img  src={"https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fHw%3D"}  
            className={`h-full w-full object-cover brightness-50 `} alt="seteca"/>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        
        
    </div>
    
  )
}

export default hometop