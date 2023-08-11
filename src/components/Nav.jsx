import React from 'react'

const Nav = () => {
  return (
    <div className=' flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 py-5'>
      <button>
        <img src = "/assets/logo.png" />
      </button>
        <ul className='grid grid-cols-9 gap-4 font-bold tracking-wide'>
            <li className='cursor-pointer'>SIGN IN</li>
            <li className='cursor-pointer'>LEGAL</li>
            <li className='cursor-pointer'>LICENSES</li>
            <li className='cursor-pointer'>SECURITY</li>
            <li className='cursor-pointer'>CAREERS</li>
            <li className='cursor-pointer'>PRESS</li>
            <li className='cursor-pointer'>SUPPORT</li>
            <li className='cursor-pointer'>STATUS</li>
            <li className='cursor-pointer'>CODEBLOG</li>
        </ul>
        <button>
        <img src = "/assets/eye button.png" />
        </button>
    </div>
  )
}

export default Nav