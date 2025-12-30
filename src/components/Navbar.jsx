import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='text-xl bg-cyan-900 flex justify-between items-center px-8 py-4'>
      <h2 className='hidden md:block'>React DOM </h2>
      <div className='flex gap-5 md:gap-10'> 
        <Link className=' hover:text-cyan-500' to='/' >Home</Link>
        <Link className=' hover:text-cyan-500' to='/about' >About</Link>
        <Link className=' hover:text-cyan-500' to='/contact' >Contact</Link>
        <Link className=' hover:text-cyan-500' to='/courses' >Courses</Link>
        <Link className=' hover:text-cyan-500' to='/product' >Product</Link>
      </div>
    </div>
  )
}

export default Navbar
