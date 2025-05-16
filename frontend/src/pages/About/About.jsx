import React from 'react'
import assets from '../../assets/assets'
import { IoStorefront } from "react-icons/io5";
const About = () => {
  return (
    <div className=' flex flex-col justify-center items-center font-sans bg-gradient-to-tl from-violet-200 via-yellow-50 to-blue-200' >

      <div className='flex justify-center items-center pt-35 pb-10 ' >
        <div className='p-2.5 w-[90%] ' >
          <div className='grid md:grid-cols-2 grid-cols-1 pb-7' >
            <div className='p-2.5 mr-7'>
              <p className='text-[16px] font-semibold md:text-left text-center mb-4 text-[#2CBCA5] ' >About</p>
              <h1 className='text-6xl  font-bold md:text-left text-center mb-4 pb-5' >Founded on trust. Focused on relationships.</h1>
              <p className='text-[18px] text-[#666666] md:text-left text-center font-semibold mb-4 '>Developed by Technolite Business Solutions Pvt. Ltd., CONNECTit stands as a testament to our unwavering commitment to empowering businesses with innovative, efficient solutions tailored for success.</p>
            </div>
            <div className=' h-[412px] p-2.5 hidden md:flex justify-center items-start' >
              <img className='h-[315px]' src={assets.pic1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <hr className='border border-gray-300 w-[90%]  ' />

      <div className=' p-2.5  flex justify-center items-center pb-10  ' >
        <div className='md:h-[153px] h-[250px] md:w-[1140px] w-[300px] md:flex block justify-evenly items-center pt-10 gap-5 ' >
          <div className='flex  flex-col justify-center items-center gap-3 w-full px-2.5 capitalize' >
            <h2 className=' text-3xl md:text-5xl font-bold' >10k+</h2>
            <p className=' text-[14px] md:text-[16px] text-gray-400'>Happy Clients</p>
          </div>
          <div className='flex  flex-col justify-center items-center gap-3 w-full px-2.5 capitalize' >
            <h2 className=' text-3xl md:text-5xl font-bold' >98%</h2>
            <p className=' text-[14px] md:text-[16px] text-gray-400'>Satisfaction rate </p>
          </div>
          <div className='flex  flex-col justify-center items-center gap-3 w-full px-2.5 capitalize' >
            <h2 className=' text-3xl md:text-5xl font-bold' >30+</h2>
            <p className=' text-[14px] md:text-[16px] text-gray-400'>Team Members</p>
          </div>
        </div>
      </div>

      <hr className='border border-gray-300 w-[90%]  ' />

      <div className='w-[90%] flex flex-col justify-center items-center' >

        <div className='flex flex-col justify-center items-center pt-32 pb-5 ' >
          <div className='w-[500px] flex flex-col justify-center items-center ' >
            <h1 className='text-5xl font-bold pb-9' >Who we help</h1>
            <p className='text-[18px] text-xs/8 text-center mb-4 font-semibold text-[#666666]' >From SMBs to freelancers, CONNECTit delivers smart communication and marketing solutions tailored to meet diverse industry needs and drive success.</p>
          </div>

        </div>

        <div className=' md:flex block justify-center items-center ' >
          <div className='p-10 h-[350px] m-5 lg:w-[786px] md:w-[600px] w-[400px] bg-[#2CBCA5] rounded-2xl' >
            <div className='pb-5' >
            <p className='md:text-5xl text-3xl font-semibold text-[#272C2E] pb-4 '>Supporting Businesses of Every Size & Industry</p>
            </div>
            <div className='flex justify-center md:justify-start' >
              <button className='py-4 px-10 bg-black text-white rounded-[8px]'  >
                <a href="">Register now</a>
              </button>
              
            </div>
          </div>
          <div className=' flex flex-col justify-center p-10 m-5 h-[350px] w-[400px] bg-white rounded-2xl ' >
            <div>
              <IoStorefront className='text-[55px]' />
            </div>
            <h5 className='text-[21px] font-semibold pt-1.5 mb-3' >Small & Mid-Sized Businesses (SMBs)</h5>
            <p className='text-[16px]  mb-2 text-gray-700' >Across industries like retail, healthcare, education, and more.</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default About
