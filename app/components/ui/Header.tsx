import React from 'react'

const Header=()=> {
  return (
    <header className='w-full bg-gray-600 '>
      <div className='container m-auto py-6 flex justify-between items-center mx-5'>
        <p className='text-4xl text-bold text-slate-100'>
          LOGO
        </p>
        <nav className='flex justify-between gap-2'>
            <a href="#" className='text-base text-slate-100 p3'>Enlace 1</a>
            <a href="#" className='text-base text-slate-100 p3'>Enlace 2</a>
            <a href="#" className='text-base text-slate-100 p3'>Enlace 3</a>

        </nav>
      </div>
    </header>
  )
}


export default Header