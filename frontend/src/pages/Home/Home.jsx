import React from 'react'
import { FaQuoteRight } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import assets from '../../assets/assets'

const Home = () => {
    return (
        <div className='flex justify-center items-center font-sans bg-gradient-to-tl from-violet-100 via-yellow-50 to-blue-100 pb-10 '>
            <div className='w-[80%]'>
                <div className='pt-41 ' >
                    <div className='flex flex-col justify-center items-center mb-5' >
                        <div className='mb-4 flex justify-center w-[400px] md:w-[700px]  lg:w-[916px]' >
                            <img className='h-[40px]' src={assets.highlight} alt="" />
                            <div className='lg:w-[896px] md:w-[600px] w-[300px] mb-5' >
                                <h1 className='md:text-8xl text-6xl text-center text-[#0f110f] font-bold' >Your Partner <br /> in Powerful Branding</h1>
                            </div>
                            <img className='h-[45px] mt-9 animate-spin ' style={{ animation: 'spin 3s linear infinite' }} src={assets.shape} alt="" />
                        </div>
                        <div className='mb-4' >
                            <p className='text-[27px] text-[#111111] font-semibold capitalize' >trusted by 1k+ businesses</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center' >
                        <a className='bg-black px-10 py-4 ml-3 text-white rounded-[8px] text-[15px] font-bold hover:bg-white hover:text-black transition-colors transform duration-300 hover:outline-black hover:outline-1 ' href="/">Get started</a>
                    </div>


                    <div className='pt-20 flex justify-center items-center' >
                        <div className='flex justify-center items-center' >
                            <div className='m-5 p-2.5 md:w-[300px] w-[100px] -mt-40  ' ><img className='rounded-[8px] w-full ' src={assets.connect1} alt="" /></div>
                            <div className='m-5 p-2.5 md:w-[300px] w-[100px]' ><img className='rounded-[8px] w-full ' src={assets.connect2} alt="" /></div>
                            <div className='m-5 p-2.5 md:w-[300px] w-[100px] -mt-40 ' ><img className='rounded-[8px] w-full ' src={assets.connect3} alt="" /></div>
                        </div>
                    </div>

                </div>


                <div className=' p-2.5  flex justify-center items-center   ' >
                    <div className='h-[153px] w-[1140px] flex justify-evenly items-center pt-10 gap-5 ' >
                        <div className='flex  flex-col justify-center items-center gap-3 w-full px-2.5 capitalize' >
                            <h2 className=' text-3xl md:text-5xl font-bold' >1k+</h2>
                            <p className=' text-[14px] md:text-[16px] text-gray-400'>app user</p>
                        </div>
                        <div className='flex  flex-col justify-center items-center gap-3 w-full px-2.5 capitalize' >
                            <h2 className=' text-3xl md:text-5xl font-bold' >100+</h2>
                            <p className=' text-[14px] md:text-[16px] text-gray-400'>business catagories</p>
                        </div>
                        <div className='flex  flex-col justify-center items-center gap-3 w-full px-2.5 capitalize' >
                            <h2 className=' text-3xl md:text-5xl font-bold' >20+</h2>
                            <p className=' text-[14px] md:text-[16px] text-gray-400'>channel partners</p>
                        </div>
                        <div className='flex  flex-col justify-center items-center gap-3 w-full px-2.5 capitalize' >
                            <h2 className=' text-3xl md:text-5xl font-bold' >4.5</h2>
                            <p className=' text-[14px] md:text-[16px] text-gray-400'>client rating</p>
                        </div>
                    </div>
                </div>

                {/* services */}
                <div className='flex justify-center items-center py-10 mb-0 md:mb-10  ' >
                    <div className='flex flex-col justify-center items-center mx-15' >

                        <div className=' md:flex block justify-center items-center my-5 ' >
                            <div className=' mr-0 md:mr-10 flex justify-center items-center' >
                                <div className=' h-12 md:h-[84px] w-[350px] md:w-[540px] pb-0 md:pb-5 md:flex md:justify-center' >
                                    <h2 className=' text-2xl md:text-[43px] font-semibold ' >Any Business One Solution</h2>
                                </div>
                            </div>
                            <div className=' h-12 md:h-[84px] w-[350px] md:w-[540px]  md:flex md:justify-center' >
                                <p className=' text-[12px] md:text-[18px] text-gray-400 mb-4 font-semibold  ' >From small businesses to industry leaders, 10K+ trust QuickTalk to automate and optimize communication. Join them today!</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 mb-3' >
                            <div className='flex justify-center items-center' >
                                <div className='p-2.5' >
                                    <div className='p-10 md:my-5 bg-white rounded-2xl border border-gray-300 shadow-xl shadow-[#c6c6c6d2] ' >
                                        <div className='p-2.5' >
                                            <h1 className='text-[21px] pb-2 font-bold  ' >Automated Communication</h1>
                                            <p className='text-[16px] text-gray-500 ' >Post-call SMS and WhatsApp messages, ensuring timely follow-ups and reducing missed opportunities.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center' >
                                <div className='p-2.5 mt-0 md:mt-10' >
                                    <div className='p-10 md:my-5 bg-white rounded-2xl border border-gray-300 shadow-xl shadow-[#c6c6c6d2] ' >
                                        <div className='p-2.5' >
                                            <h1 className='text-[21px] pb-2 font-bold ' >Schedule Your Task</h1>
                                            <p className='text-[16px] text-gray-500 ' >Scheduling allows users to automate the sending of SMS messages at a predetermined date and time. This feature is commonly used for reminders, marketing campaigns, appointment confirmations, and notifications.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center' >
                                <div className='p-2.5 mt-0 md:mt-20' >
                                    <div className='p-10 md:my-5 bg-white rounded-2xl border border-gray-300 shadow-xl shadow-[#c6c6c6d2]  ' >
                                        <div className='p-2.5' >
                                            <h1 className='text-[21px] pb-2 font-bold ' >WhatsApp Automation</h1>
                                            <p className='text-[16px] text-gray-500 ' >Chatbots for customer inquiries and bulk messaging for efficient communication and marketing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center items-center' >
                            <div className='grid grid-cols-1 md:grid-cols-2' >
                                <div className='flex justify-center items-center h-[400px] md:h-[506px] p-3' >
                                    <img className='md:h-[486px] h-[300px]' src={assets.connect5} alt="" />
                                </div>
                                <div className='ml-5 flex flex-col justify-center items-center h-[400px] md:h-[506px]' >
                                    <div className='pb-5' >
                                        <h1 className='md:text-[43px] text-center md:text-left text-3xl font-bold mb-4' >Connect, Engage, Convert Effortlessly</h1>
                                    </div>
                                    <p className='md:text-[18px] text-[14px] font-semibold text-[#666666] ' >Our intelligent automation platform delivers seamless follow-ups, boosts customer engagement, and elevates your brand’s digital presence—all in one intuitive solution built for effortless growth.</p>
                                    <div className='flex justify-between items-center pt-[60px] pr-[20px]' >
                                        <img className='h-[48px] pr-2' src={assets.connect6} alt="" />
                                        <p className='text-[#666666] text-[12px] md:text-[14px] ' >Trusted by 1k+ Business Owners Over India</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <div className='flex flex-col justify-center items-center mb-5' >
                        <div className='mb-4 flex justify-center w-[450px] md:w-[700px]  lg:w-[916px]' >
                            <img className='h-[40px]' src={assets.highlight} alt="" />
                            <div className='lg:w-[600px] md:w-[500px] w-[450px] mb-5' >
                                <h1 className='md:text-5xl text-3xl text-center text-[#0f110f] font-bold' >What our awesome  customers say</h1>
                            </div>
                            <img className='h-[45px] mt-9 animate-spin  ' style={{ animation: 'spin 3s linear infinite' }} src={assets.shape} alt="" />
                        </div>
                        <div className='mb-4' >
                            <p className='md:text-[18px] text-[14px] text-[#666666] font-semibold capitalize' >Real Stories of Success and Satisfaction with QuickTalk</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center ' >
                        <div className='grid grid-cols-1 md:grid-cols-3' >
                            <div className='flex flex-col justify-center items-center bg-white rounded-2xl shadow-2xl h-[504px] p-10 m-5' >
                                <div className='flex justify-center items-center mb-4 ' >
                                    <div className='p-3.5 bg-violet-500 rounded-full ' >
                                        <FaQuoteRight className=' text-3xl text-white' />
                                    </div>
                                </div>
                                <span>
                                    <p className='text-[22px] text-center font-semibold mb-4 ' >"QuickTalk is a lifesaver! I often miss calls during meetings, and the auto-reply feature ensures I never leave anyone hanging. Highly recommend!"</p>
                                </span>
                                <div className='flex justify-center mb-4 gap-1' >
                                    <IoStarSharp className='text-yellow-400 text-xl' />
                                    <IoStarSharp className='text-yellow-400 text-xl' />
                                    <IoStarSharp className='text-yellow-400 text-xl' />
                                    <IoStarSharp className='text-yellow-400 text-xl' />
                                    <IoStarSharp className='text-yellow-400 text-xl' />
                                </div>

                            </div>
                            <div className='flex flex-col justify-center items-center bg-white rounded-2xl shadow-2xl h-[504px] p-10 m-5' >
                                <div className='flex justify-center items-center mb-4 ' >
                                    <div className='p-3.5 bg-violet-500 rounded-full ' >
                                        <FaQuoteRight className=' text-3xl text-white' />
                                    </div>
                                </div>
                                <span>
                                    <p className='text-[22px] text-center font-semibold mb-4 ' >"Excellent app! I use it daily while working. The auto SMS response to missed and incoming calls is smooth and professional."</p>
                                </span>
                                <div className='flex justify-center mb-4 gap-1' >
                                    <IoStarSharp className='text-yellow-400 text-xl' />
                                    <IoStarSharp className='text-yellow-400 text-xl' />
                                    <IoStarSharp className='text-yellow-400 text-xl' />
                                    <IoStarSharp className='text-yellow-400 text-xl' />
                                    <IoStarSharp className='text-yellow-400 text-xl' />
                                </div>

                            </div>
                            <div className='flex flex-col justify-center items-center bg-white rounded-2xl shadow-2xl h-[504px] p-10 m-5' >
                                <div className='flex justify-center items-center mb-4 ' >
                                    <div className='p-3.5 bg-violet-500 rounded-full ' >
                                        <FaQuoteRight className=' text-3xl text-white' />
                                    </div>
                                </div>
                                <span>
                                    <p className='text-[22px] text-center font-semibold mb-4 ' >"Perfect for professionals! This app keeps communication flowing even when I'm in meetings or traveling. A must-have!"</p>
                                </span>
                                <div className='flex justify-center mb-4 gap-1' >
                                    <IoStarSharp className='text-yellow-400 text-xl' />
                                    <IoStarSharp className='text-yellow-400 text-xl' />
                                    <IoStarSharp className='text-yellow-400 text-xl' />
                                    <IoStarSharp className='text-yellow-400 text-xl' />
                                    <IoStarSharp className='text-yellow-400 text-xl' />
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>




        </div>
    )
}

export default Home
