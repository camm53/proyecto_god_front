import React from 'react'

import { createContext, useContext, useState } from 'react';

const ToggleContext = createContext();

export const Contactcard = ({ children }) => {
    const [isContactCardVisible, setIsContactCardVisible] = useState(false);
    
    const toggleContactCard = () => setIsContactCardVisible(prev => !prev);
  
    return (
      <ToggleContext.Provider value={{ isContactCardVisible, toggleContactCard }}>
        <div className={`fixed top-0 left-0 w-full bg-s-7 z-2b ${isContactCardVisible?"hidden":""}`}>auuwgbfñaliugbaiuw</div>
      </ToggleContext.Provider>
    );
  };

  export const useToggle = () => useContext(ToggleContext);