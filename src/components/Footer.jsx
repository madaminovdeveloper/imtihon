import React from 'react'

function Footer() {
  return (
    <div>
<footer className='text-white bg-black ' >
  <div className="container flex justify-between items-center">
    <ul className='flex justify-between gap-20 items-center'>
      <li>Living Room</li>
      <li>Bedroom</li>
      <li>Kitchen & Dining</li>
    </ul>
    <img src="/public/logo.svg" alt="" />

    <ul className='flex justify-between gap-20 items-center'>
      <li>About</li>
      <li>Blog</li>
      <li>Support</li>
    </ul>
  </div>
</footer>

    </div>
  )
}

export default Footer