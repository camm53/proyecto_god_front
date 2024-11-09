import React from 'react'

const section = ({
    className,
    id,
    children,
    custonPaddings
}) => {

  return (
    <div className={`relative ${custonPaddings|| "py-10 md:py-16 px-5 md:px-14  " } ${className}`}>{children}</div>
  )
}

export default section