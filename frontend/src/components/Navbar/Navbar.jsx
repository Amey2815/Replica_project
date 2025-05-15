import React, { useState } from 'react'
import assets from '../../assets/assets.js'
import { Menu, X } from 'lucide-react';
const Navbar = () => {

  const [isMenuOpen, setisMenuOpen] = useState(false);
  const toggleMenu = () => setisMenuOpen(!isMenuOpen);

  return (
    <div className='bg-white shadow-2xl sticky top-0 z-10  ' >
      
      <div className='px-4 sm:px-6 lg:px-8 py-2.5 mt-1' >
      <div className="lg:hidden flex absolute mt-3">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">
              {isMenuOpen ? <X className="h-6 w-6 " /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        <div className='py-2 mx-11 flex lg:justify-between justify-center items-center h-14 lg:h-16 ' >
        
          <div className='w-[227px]' >
            <img className='w-full' src={assets.logo} alt="" />
          </div>
          <div className=' hidden lg:flex justify-center items-center ' >
            <div className='flex text-[16px] font-bold' >
              <a className='px-5 py-4 text-gray-600 hover:bg-gray-100 rounded-[8px] hover:text-violet-500 ' href="/Home">Home</a>
              <a className='px-5 py-4 text-gray-600 hover:bg-gray-100 rounded-[8px] hover:text-violet-500 ' href="/About-Us">About Us</a>
              <a className='px-5 py-4 text-gray-600 hover:bg-gray-100 rounded-[8px] hover:text-violet-500 ' href="/Pricing">Pricing</a>
              <a className='px-5 py-4 text-gray-600 hover:bg-gray-100 rounded-[8px] hover:text-violet-500 ' href="/Channel-Partner">Channel Partner</a>
            </div>
            <div  >
              <a className='bg-black px-5 py-2 ml-3 text-white rounded-[8px] text-[15px] font-bold hover:bg-white hover:text-black transition-colors transform duration-300 hover:outline-black hover:outline-1 ' href="/book">Book Demo</a>
            </div>
          </div>
          
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden h-55 ">
          {['Home', 'About-Us', 'Pricing', 'Channel-Partner'].map(section => (
            <a key={section} href={`/${section}`} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-violet-500 hover:bg-gray-50" onClick={toggleMenu}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
              
            </a>
            

          ))}
          <div className='flex justify-center items-center mt-2' >
              <a className='bg-black px-5 py-2 ml-3 text-white rounded-[8px] text-[15px] font-bold hover:bg-white hover:text-black transition-colors transform duration-300 hover:outline-black hover:outline-1 ' href="/book">Book Demo</a>
            </div>
        </div>
        
      )}



    </div>
  )
}

export default Navbar
