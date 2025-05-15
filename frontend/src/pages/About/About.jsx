import React from 'react'
import assets from '../../assets/assets'

const About = () => {
  return (
    <div className=' flex flex-col justify-center items-center font-sans bg-gradient-to-tl from-violet-100 via-yellow-50 to-blue-100' >

      <div className='flex justify-center items-center pt-35 pb-10 ' >
        <div className='p-2.5 w-[90%] ' >
            <div className='grid grid-cols-2  pb-7' >
            <div className='p-2.5 mr-7'>
                <p className='text-[16px] font-semibold mb-4 text-[#2CBCA5] ' >About</p>
                <h1 className='text-6xl  font-bold mb-4 pb-5' >Founded on trust. Focused on relationships.</h1>
                <p className='text-[18px] text-[#666666] font-semibold mb-4 '>Developed by Technolite Business Solutions Pvt. Ltd., CONNECTit stands as a testament to our unwavering commitment to empowering businesses with innovative, efficient solutions tailored for success.</p>
            </div>
            <div className=' h-[412px] p-2.5 flex justify-center items-start' >
                <img className='h-[315px]' src={assets.pic1} alt="" />
            </div>
        </div>
        </div>
      </div>

      <hr className='border border-gray-300 w-[80%] ' />

      <div>

      </div>

    </div>
  )
}

export default About
