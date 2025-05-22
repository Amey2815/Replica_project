import React from 'react'
import assets from '../../assets/assets'

const Footer = () => {
    return (
        <div className='p-[32px_15px_8px] md:mx-15 mx-0 ' >

            <div className='md:my-8 my-3' >
                <div className='md:flex  block justify-center md:justify-between pb-2 ' >
                    <div className='mx-8 flex justify-center items-center' >
                        <img className='md:h-30 h-15 mb-1 md:mb-8' src={assets.logo} alt="" />
                    </div>
                    <hr className='w-full md:hidden flex md:w-1/2 border-gray-400 my-4' />
                    <div className='md:mx-8 mx-0 md:my-0 my-2 flex md:block md:justify-center justify-evenly  ' >
                        <div className='md:pb-8 pb-5 text-[10px] md:text-[15px]' >
                            <p className='md:mb-4 mb-1 font-semibold' ><a href="/Home">Home</a></p>
                            <p className='md:mb-4 mb-1 font-semibold' ><a href="/About-Us">About Us</a></p>
                            <p className='md:mb-4 mb-1 font-semibold' ><a href="/Pricing">Pricing</a></p>
                            <p className='md:mb-4 mb-1 font-semibold' ><a href="/Channel-Partner">Channel Partner</a></p>
                            <p className='md:mb-4 mb-1 font-semibold' ><a href="http://wa.me/8530055138">Book Demo</a></p>
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
                    <div className='md:mx-8 mx-0 flex md:block md:justify-center justify-evenly ' >
                        <div>
                            <h5 className='md:text-2xl text-[14px] font-bold mb-1 md:mb-4' >+91 8530055138</h5>
                            <p className='text-[12px]' >WhatsApp or Call</p>
                        </div>
                        <div className='md:mt-6 mt-0' >
                            <h5 className='md:text-2xl text-[14px] font-bold mb-1 md:mb-4' >sales@quicktalk.store.</h5>
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
                    <ul className='flex justify-center mb-4' >
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
