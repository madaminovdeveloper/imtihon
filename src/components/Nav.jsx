import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
    

function Nav() {
  return (
    <>
<nav className='bg-black text-white'>
    <div className="container flex justify-between items-center ">
        <img src="/public/logo.svg" alt="" />

        <ul className='flex justify-between gap-10'>
            <li>LIVING ROOM</li>
            <li>BEDROOM</li>
            <li>KITCHEN &  DINING</li>
            <li>CONTACT</li>
        </ul>

        <div className='flex justify-between items-center gap-5'>
            <img src="/public/shop.svg" alt="" />
            <img src="/public/human.svg" alt="" />
            <img src="/public/search.svg" alt="" />


        </div>
    </div>
</nav>

    
    </>



  )
}

export default Nav