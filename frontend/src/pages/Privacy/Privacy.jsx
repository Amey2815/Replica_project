import React from 'react'
import { Link } from 'react-router-dom'
const Privacy = () => {
  return (
    <div className='bg-gradient-to-tl from-blue-50 via-violet-50 to-yellow-50 py-7' >
      <div className=" px-4 py-8 sm:px-8 md:px-16 lg:px-32 max-w-screen-xl mx-auto text-sm text-gray-800">
        <div className="text-[18px] flex justify-center  text-gray-600 mb-5">
        <Link to="/" className="text-blue-600 hover:underline">QuickTalk</Link> &nbsp;»&nbsp; 
        <span className="text-gray-800 font-semibold">Privacy Policy</span>
      </div>
        <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="font-bold text-3xl text-gray-500 mb-2">1. Introduction</h2>
          <p className='text-[16px] text-gray-500' >
            Welcome to QuickTalk developed by Webisoftech Pvt. Ltd. This privacy policy describes how we collect,
            use, and disclose, your personal data (“Personal Information”) when you use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-bold text-3xl text-gray-500 mb-2">2. Information We Collect</h2>

          <h3 className="font-semibold text-gray-400 text-2xl mt-4 mb-1">Personal Information</h3>
          <table className="w-full table-auto border border-gray-300 mb-4 text-sm">
            <thead className="">
              <tr>
                <th className="border border-gray-300 px-2 py-1">S. No</th>
                <th className="border border-gray-300 px-2 py-1">Permission</th>
              </tr>
            </thead>
            <tbody>
              {["Read Contacts", "Read/Write External Storage", "Camera", "Microphone", "Internet Access", "Location", "Bluetooth", "All Applications", "System Alert Window", "Call logs", "Messages", "Location Navigation"].map((item, i) => (
                <tr key={i}>
                  <td className="border border-gray-300 px-2 py-1 text-center">{i + 1}</td>
                  <td className="border border-gray-300 px-2 py-1">{item}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3 className="font-semibold text-gray-400 text-2xl mt-4 mb-1">Permissions We Require</h3>
          <table className="w-full table-auto border border-gray-300 text-sm">
            <thead className="">
              <tr>
                <th className="border border-gray-300 px-2 py-1">S. No</th>
                <th className="border border-gray-300 px-2 py-1">Permission</th>
                <th className="border border-gray-300 px-2 py-1">Details</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Calling Info", "Business Type, Business Phone Number"],
                ["2", "Call Log Info", "Call Type, Number"],
                ["3", "Device Info", "Device Brand, Android Version, Serial"],
                ["4", "Contact Info", "Name, Phone Number"],
                ["5", "Business Card Info", "First Name, Last Name, Company Name, Email, Location, Country, State, Pin Code"]
              ].map(([sn, perm, det], i) => (
                <tr key={i}>
                  <td className="border border-gray-300 px-2 py-1 text-center">{sn}</td>
                  <td className="border border-gray-300 px-2 py-1">{perm}</td>
                  <td className="border border-gray-300 px-2 py-1">{det}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <h2 className="font-bold text-3xl text-gray-500 mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To streamline app use and improve functionality</li>
            <li>To personalize marketing materials</li>
            <li>To manage and resolve queries</li>
            <li>To analyze trends and usage</li>
            <li>To improve customer support</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-bold text-3xl text-gray-500 mb-2">4. Data Sharing and Disclosure</h2>
          <ul className="list-disc list-inside">
            <li>With Service Providers</li>
            <li>For Legal Reasons</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-bold text-3xl text-gray-500 mb-2">5. Data Security</h2>
          <p className='text-[16px] text-gray-500' >We use reasonable security measures to protect your data.</p>
        </section>

        <section className="mb-8">
          <h2 className="font-bold text-3xl text-gray-500 mb-2">6. Data Retention</h2>
          <p className='text-[16px] text-gray-500' >We retain your personal data as long as necessary to fulfill the purpose of collection.</p>
        </section>

        <section className="mb-8">
          <h2 className="font-bold text-3xl text-gray-500 mb-2">7. Background Operation</h2>
          <p className='text-[16px] text-gray-500' >Our app may operate in the background to ensure message delivery and service availability.</p>
        </section>

        <section className="mb-8">
          <h2 className="font-bold text-3xl text-gray-500 mb-2">8. Children’s Policy</h2>
          <p className='text-[16px] text-gray-500' >QuickTalk is not intended for use by children under 13 years of age.</p>
        </section>

        <section className="mb-8">
          <h2 className="font-bold text-3xl text-gray-500 mb-2">9. Cookies Policy</h2>
          <h3 className="font-semibold text-gray-400 text-2xl">What are Cookies?</h3>
          <p className='text-[16px] text-gray-500' >Cookies are small data files stored on your device to enhance user experience.</p>
          <h3 className="font-semibold text-gray-400 text-2xl">Why We Use Cookies</h3>
          <ul className="list-disc list-inside">
            <li>To improve app functionality and experience</li>
            <li>To analyze user behavior</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-bold text-3xl text-gray-500 mb-2">10. Account Deletion</h2>
          <p className='text-[16px] text-gray-500' >
            To delete your account, go to the app profile section and request account deletion. Data will be permanently removed except
            where retention is required.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-bold text-3xl text-gray-500 mb-2">11. Your Rights</h2>
          <p className='text-[16px] text-gray-500' >You have rights to access, update or delete your personal information. Contact support for such requests.</p>
        </section>

        <section className="mb-8">
          <h2 className="font-bold text-3xl text-gray-500 mb-2">12. Changes to This Privacy Policy</h2>
          <p className='text-[16px] text-gray-500' >We may update this privacy policy from time to time and notify users of significant changes.</p>
        </section>

        <section className="mb-4">
          <h2 className="font-bold text-3xl text-gray-500 mb-2">13. Contact Us</h2>
          <p className='text-[16px] text-gray-500' >
            If you have any questions, please contact us at:
            <br />
            <strong>Email:</strong> info@quicktalk.store
            <br />
            <strong>Phone:</strong> +91 8530055138
          </p>
        </section>
      </div>
    </div>

  )
}

export default Privacy
