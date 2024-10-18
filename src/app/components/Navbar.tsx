import React from 'react'
import NavList from './NavList'


function Navbar() {
  return (
    <div className='flex justify-center gap-5 items-center h-14 bg-teal-800 text-yellow-200 text-xl md:text-2xl'>
        <NavList href="/" title="Home" />
         <NavList href="/country" title="CountryList" />
         
    </div>
  )
}

export default Navbar