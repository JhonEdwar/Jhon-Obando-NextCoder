import React from 'react'

interface BotonProps{
    children: React.ReactNode;
    className?:string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

 const Boton:React.FC<BotonProps>=({children, className='', ...args}) =>{
  return (
        <button className={`rounded-xl py-2 px-4 bg-blue-400 
        text-center ${className}`}{...args}>
        {children}
    </button>
  )
}


export default Boton