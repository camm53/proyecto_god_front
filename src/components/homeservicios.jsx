import React from 'react'
import Section from './section'
import Tests from "./tests";

const homeservicios = () => {
  return (
    <div className='flex justify-center text-s-8 bg-s-1'>
        <Section className={"w-full flex flex-col md:flex-row justify-center  flex-wrap "}
        custonPaddings={"py-[3rem]  px-[1.2rem] md:px-0 md:mx-14"}>
            <div className='w-full'>
                <div className='mb-4'>nuestros servicios</div>
                <div className='w-full flex items-center justify-evenly space-y-4 md:space-y-0 md:space-x-4  flex-col md:flex-row '>
                 <Tests/>  
                    
                </div>
            </div>
            
            
        </Section>
    </div>
  )
}

export default homeservicios