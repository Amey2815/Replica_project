import React from 'react'
import assets from '../../assets/assets'

const Footer = () => {
    return (
        <div className='p-[32px_15px_8px] md:mx-15 mx-0 ' >

            <div className='md:my-8 my-3' >
                <div className='md:flex  block justify-center md:justify-between pb-2 ' >
                    <div className='mx-8 flex justify-center ' >
                        <img className='md:w-75 w-30 mb-1 md:mb-8' src={assets.logo} alt="" />
                    </div>
                    <hr className='w-full md:hidden flex md:w-1/2 border-gray-400 my-4' />
                    <div className='md:mx-8 mx-0 md:my-0 my-2 flex md:block md:justify-center justify-between  ' >
                        <div className='md:pb-8 pb-5 text-[10px] md:text-[15px]' >
                            <p className='md:mb-4 mb-1 font-semibold' >Made in India with❤</p>
                            <p className='md:mb-4 mb-1 font-semibold' >Technolite Business Solutions PVT LTD</p>
                            <p className='md:mb-4 mb-1 font-semibold' >525, Suratwala Mark Plazzo, Hinjewadi Pune</p>
                            <p className='md:mb-4 mb-1 font-semibold' >CIN – U62012PN2023PTC226629</p>
                            <p className='md:mb-4 mb-1 font-semibold' >GST – 27AAKCT6484A1Z5</p>
                        </div>
                        <div>
                            <p className='text-[18px] mb-1 md:mb-5 font-bold' >Social Channel</p>
                            <div className='flex md:gap-6 gap-2 my-3 md:my-5' >
                                <img className='md:w-10 w-6 hover:scale-125 transform transition-all duration-300' src={assets.insta} alt="" />
                                <img className='md:w-10 w-6 hover:scale-125 transform transition-all duration-300' src={assets.facebook} alt="" />
                                <img className='md:w-10 w-6 hover:scale-125 transform transition-all duration-300' src={assets.Youtube} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='md:mx-8 mx-0 flex md:block md:justify-center justify-between ' >
                        <div>
                            <h5 className='md:text-2xl text-[14px] font-bold mb-1 md:mb-4' >+91 8237214521</h5>
                            <p className='text-[12px]' >WhatsApp or Call</p>
                        </div>
                        <div className='md:mt-6 mt-0' >
                            <h5 className='md:text-2xl text-[14px] font-bold mb-1 md:mb-4' >sales@connectitapp.in</h5>
                            <p className='text-[12px]' >9AM-6PM</p>
                        </div>
                    </div>

                </div>
                <hr className='border-gray-400 ' />
            </div>

            <div className='md:flex block justify-between ' >
                <div>
                    <p className='text-[13px] text-[#A0A1A2] md:text-left text-center mb-2 ' >Copyright ©2025 CONNECTit App. All rights reserved</p>
                </div>
                <div>
                    <ul className='flex mb-4' >
                        <li className='px-3 md:text-[13px] text-[10px] font-semibold  ' >home</li>
                        <li className='px-3 md:text-[13px] text-[10px] font-semibold  ' >pricing</li>
                        <li className='px-3 md:text-[13px] text-[10px] font-semibold  ' >privacy policy</li>
                        <li className='px-3 md:text-[13px] text-[10px] font-semibold  ' >terms of service</li>
                        <li className='px-3 md:text-[13px] text-[10px] font-semibold  ' >return and refund policy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
