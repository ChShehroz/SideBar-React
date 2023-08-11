import React from 'react'
import logo from '../../Assest/Images/logo-ct-dark.png'

const SideBar = () => {
  return (
    <aside className='h-full w-64 bg-[#e5e9ed] mt-4 mr-0 mb-4 ml-4'>
      <div className='h-20 px-8 py-6'>
        <a className='flex items-center'>
          <img className='max-h-8' src={logo} alt='main-logo' />
          <span className='text-[#344767] text-sm font-semibold ml-2'>Soft UI Dashboard Pro</span>
        </a>
      </div>
    </aside>
  )
}

export default SideBar