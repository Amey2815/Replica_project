import React from 'react';
import assets from '../../assets/assets';
import { FaLightbulb } from "react-icons/fa";
import { FcCustomerSupport } from "react-icons/fc";
import { GiTakeMyMoney } from "react-icons/gi";
const ChannelPartner = () => {
    return (
        <div className="min-h-screen bg-gradient-to-tl from-violet-100 via-yellow-50 to-blue-100 flex flex-col items-center justify-center px-6 py-12">
            <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center">
                {/* Image Section */}
                <div className="rounded-xl overflow-hidden shadow-md p-6">
                    <img
                        src={assets.pic3} // Replace with your actual image path
                        alt="Partner Handshake"
                        className="w-full h-full object-cover"
                    />

                </div>

                {/* Text Content */}
                <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        We Welcome a diverse <br /> range of Partners
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Join our network of partners dedicated to delivering exceptional communication solutions to businesses.
                    </p>

                    <ul className="space-y-3 text-lg text-gray-700">
                        <li className="flex items-center">
                            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                            <strong>Channel Partner</strong>
                        </li>
                        <li className="flex items-center">
                            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                            <strong>Co-branding</strong>
                        </li>
                        <li className="flex items-center">
                            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                            <strong>WhiteLabel</strong> {/* Note: Fixes spelling from "WhiteLable" */}
                        </li>
                    </ul>

                    <button className="mt-8 bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-900 transition">
                        Apply Now
                    </button>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 w-[90%] pt-20' >
                <div className='p-10 m-5 bg-white rounded-2xl ' >
                    <div>
                        <FaLightbulb className='text-[55px]' />
                    </div>
                    <h5 className='text-[21px] font-semibold pt-1.5 mb-3' >Innovative Solutions</h5>
                    <p className='text-[16px]  mb-2 text-gray-700' >Provide clients with AI-driven messaging, automated follow-ups, and digital business cards to streamline operations and boost engagement.</p>
                </div>
                <div className='p-10 m-5 bg-white rounded-2xl ' >
                    <div>
                        <FcCustomerSupport className='text-[55px]' />
                    </div>
                    <h5 className='text-[21px] font-semibold pt-1.5 mb-3' >Comprehensive Support</h5>
                    <p className='text-[16px]  mb-2 text-gray-700' >Access dedicated training, marketing resources, and technical assistance to ensure seamless integration and success in promoting CONNECTit’s solutions.</p>
                </div>
                <div className='p-10 m-5 bg-white rounded-2xl ' >
                    <div>
                        <GiTakeMyMoney className='text-[55px]' />
                    </div>
                    <h5 className='text-[21px] font-semibold pt-1.5 mb-3' >Attractive Incentives</h5>
                    <p className='text-[16px]  mb-2 text-gray-700' >Benefit from competitive commission structures and performance-based rewards that recognize and encourage your efforts in driving mutual growth.</p>
                </div>
            </div>
        </div>
    );
};

export default ChannelPartner;
