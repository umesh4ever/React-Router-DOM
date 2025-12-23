import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-10 py-4'>
        <Link className='hover:text-cyan-500 text-2xl font-semibold' to='/product/men' >Men</Link>
        <Link className='hover:text-cyan-500 text-2xl font-semibold' to='/product/women' >Women</Link>
        <Link className='hover:text-cyan-500 text-2xl font-semibold' to='/product/kid' >Kid</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Product
