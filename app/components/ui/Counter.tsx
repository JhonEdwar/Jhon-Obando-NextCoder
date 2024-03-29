'use client'
import React from 'react'
import Boton from './Boton';
import {useState} from 'react'

 const Counter=() =>{
    const[counter, setCounter]=useState(1)
    const increase=()=>setCounter(counter+1)
    const dicrease=()=>setCounter(counter-1)
  return (
    <div className='flex justify-center items-center gap-3'>
    <Boton onClick={dicrease}>-</Boton>
    <p>{counter}</p>
    <Boton onClick={increase}>+</Boton>
    </div>
  )
}


export default Counter