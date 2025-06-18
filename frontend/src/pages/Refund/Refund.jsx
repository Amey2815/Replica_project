import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
const Refund = () => {
    return (
        <>
        <Helmet>
            <title>
                Refund - QuickTalk
            </title>
        </Helmet>
            <div className='flex justify-center items-center' >
                <div className='w-[1200px]' >

                    <div className="bg-white px-4 py-8 sm:px-8 md:px-16 lg:px-32 max-w-screen-xl mx-auto text-[16px] font-semibold text-gray-800">
                        <div className="text-[18px] flex justify-center  text-gray-600 mb-5">
                            <Link to="/" className="text-blue-600 hover:underline">QuickTalk</Link> &nbsp;»&nbsp;
                            <span className="text-gray-800 font-semibold">Return and Refund Policy</span>
                        </div>
                        <h1 className="text-3xl font-bold mb-6 text-center">Return and Refund Policy</h1>

                        <p className="text-[16px] font-semibold text-gray-500 mb-8 ">
                            Return and Refund Policy for QuickTalk.<br />
                            Last Updated: 10-11-2024
                        </p>

                        <section className="mb-8">
                            <h2 className="font-bold text-2xl text-gray-600 mb-2">1. General Policy</h2>
                            <p className='text-[16px] text-gray-500' >
                                At QuickTalk., we strive to deliver the best experience for our users. This Return and Refund Policy outlines the terms and
                                conditions for requesting refunds on subscriptions or purchases made through our app.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-bold text-2xl text-gray-600 mb-2">2. Subscription Refunds</h2>
                            <p className="mb-2 text-[16px] text-gray-500">Refunds for subscriptions purchased through the QuickTalk. are subject to the following terms:</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>
                                    <strong className='text-gray-600' >Refund Eligibility:</strong> Refunds will only be provided in the following cases:
                                    <ul className="list-disc ml-6 text-[16px] text-gray-500">
                                        <li>Technical issues that prevent access to key features of the app and cannot be resolved within 7 business days.</li>
                                        <li>Duplicate subscriptions or billing errors caused by our payment gateway or app.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong className='text-gray-600' >Non-Refundable Cases:</strong> Refunds will not be granted for:
                                    <ul className="list-disc ml-6 text-[16px] text-gray-500">
                                        <li>Change of mind or personal dissatisfaction with the app after the subscription purchase.</li>
                                        <li>Partial usage of the subscription period.</li>
                                        <li>Violations of our Terms of Service.</li>
                                    </ul>
                                </li>
                                <li>
                                    <strong className='text-gray-600' >Refund Period:</strong> Refund requests must be submitted within 14 days of the purchase date.
                                </li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-bold text-2xl text-gray-600 mb-2">3. Process for Requesting Refunds</h2>
                            <ol className="list-decimal list-inside space-y-1">
                                <li>
                                    <strong className='text-gray-600' >Contact Support:</strong> Send an email to <a href="mailto:info@quicktalk.store" className="text-blue-600 underline">info@quicktalk.store</a> with the following details:
                                    <ul className="list-disc ml-6 text-[16px] text-gray-500">
                                        <li>Your full name</li>
                                        <li>Email ID associated with your account</li>
                                        <li>Transaction ID or proof of payment</li>
                                        <li>A detailed explanation of the issue</li>
                                    </ul>
                                </li>
                                <li><strong className='text-gray-600' >Review and Resolution:</strong> Our team will review your request within 7 business days and notify you via email.</li>
                            </ol>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-bold text-2xl text-gray-600 mb-2">4. Payment Method for Refunds</h2>
                            <p>Refunds will be processed using the same payment method originally used for the transaction. The time taken to reflect the refund may vary depending on the payment gateway or financial institution.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-bold text-2xl text-gray-600 mb-2">5. One-Time Purchases</h2>
                            <p>For one-time purchases made through QuickTalk, such as premium features or add-ons:</p>
                            <ul className="list-disc list-inside ml-4 text-[16px] text-gray-500">
                                <li>Refunds will only be granted for technical failures that prevent feature activation or functionality.</li>
                                <li>Requests must be submitted within 14 days of the purchase date.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-bold text-2xl text-gray-600 mb-2">6. Cancellation Policy</h2>
                            <ul className="list-disc list-inside ml-4 text-[16px] text-gray-500">
                                <li><strong className='text-gray-600' >Subscription Cancellation:</strong> Users may cancel their subscriptions at any time through the app or their respective app store (Google Play or App Store).</li>
                                <li><strong className='text-gray-600' >Post-Cancellation Access:</strong> Access to premium features will remain active until the end of the current billing cycle.</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-bold text-2xl text-gray-600 mb-2">7. Dispute Resolution</h2>
                            <p className='text-[16px] text-gray-500' >If you believe your refund request has been unfairly denied, you may escalate the matter by contacting <a href="mailto:info@quicktalk.store" className="text-blue-600 underline">info@quicktalk.store</a>. Our team will re-evaluate the request and provide a final resolution.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-bold text-2xl text-gray-600 mb-2">8. Changes to This Policy</h2>
                            <p className='text-[16px] text-gray-500' >We may update this Return and Refund Policy from time to time. Updates will be posted within the app and on our official website, and the “Last Updated” date will reflect the most recent changes.</p>
                        </section>

                        <section className="mb-8">
                            <h2 className="font-bold text-2xl text-gray-600 mb-2">9. Contact Us</h2>
                            <p className='text-[16px] text-gray-500' >
                                If you have any questions or need assistance regarding refunds, please contact us at:
                                <br />
                                <strong className='text-gray-600' >Technofinix Business Solutions Pvt. Ltd.</strong>
                                <br />
                                <strong className='text-gray-600' >Email:</strong> info@quicktalk.store
                                <br />
                                <strong className='text-gray-600' >Phone:</strong> +91 8530055138
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Refund
