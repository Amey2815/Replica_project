import React from 'react'
import assets from '../../assets/assets'

const Footer = () => {
    return (
        <div className='p-[32px_15px_8px] mx-15 ' >
            
            <div className='my-8 ' >
                <div className='flex justify-between pb-2 ' >
                <div className='mx-8' >
                    <img className='w-75 mb-8' src={assets.connect8} alt="" />
                    <img className='w-75 mb-8' src={assets.connect7} alt="" />
                </div>
                <div className='mx-8' >
                    <div className='pb-8 text-[15px]' >
                        <p className='mb-4 font-semibold' >Made in India with❤</p>
                        <p className='mb-4 font-semibold' >Technolite Business Solutions PVT LTD</p>
                        <p className='mb-4 font-semibold' >525, Suratwala Mark Plazzo, Hinjewadi Pune</p>
                        <p className='mb-4 font-semibold' >CIN – U62012PN2023PTC226629</p>
                        <p className='mb-4 font-semibold' >GST – 27AAKCT6484A1Z5</p>
                    </div>
                    <div>
                        <p className='text-[18px] mb-5 font-bold' >Social Channel</p>
                        <div className='flex gap-6 my-5' >
                            <img className='w-10 hover:scale-125 transform transition-all duration-300' src={assets.insta} alt="" />
                            <img className='w-10 hover:scale-125 transform transition-all duration-300' src={assets.facebook} alt="" />
                            <img className='w-10 hover:scale-125 transform transition-all duration-300' src={assets.Youtube} alt="" />
                        </div>
                    </div>
                </div>
                <div className='mx-8' >
                    <div>
                        <h5 className='text-2xl font-bold mb-4' >+91 8237214521</h5>
                    <p className='text-[15px]' >WhatsApp or Call</p>
                    </div>
                    <div className='mt-6' >
                        <h5 className='text-2xl font-bold mb-4' >sales@connectitapp.in</h5>
                    <p className='text-[15px]' >9AM-6PM</p>
                    </div>
                </div>
                
            </div>
            <hr className='border-gray-400 ' />
            </div>

            <div className='flex justify-between' >
                <div>
                    <p className='text-[13px] text-[#A0A1A2]' >Copyright ©2025 CONNECTit App. All rights reserved</p>
                </div>
                <div>
                    <ul className='flex mb-4' >
                        <li className='px-3 text-[13px] font-semibold ' >home</li>
                        <li className='px-3 text-[13px] font-semibold ' >pricing</li>
                        <li className='px-3 text-[13px] font-semibold ' >privacy policy</li>
                        <li className='px-3 text-[13px] font-semibold ' >terms of service</li>
                        <li className='px-3 text-[13px] font-semibold ' >return and refund policy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer
