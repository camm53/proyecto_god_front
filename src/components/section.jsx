import React from 'react'

const section = ({
    className,
    id,
    children,
    custonPaddings,
    maxw
}) => {

  return (
    <div className={`relative ${maxw|| "max-w-[90rem]" } ${custonPaddings|| "py-10 md:py-16 px-5 md:px-14  " } 
    ${className}`}>
        {children}
    </div>
  )
}

export default section