import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
const Terms = () => {
  return (
  <>
  <Helmet>
    <title>Terms of Service - QuickTalk</title>
  </Helmet>
  <div className="bg-white px-4 py-8 sm:px-8 md:px-16 lg:px-32 max-w-screen-xl mx-auto text-sm text-gray-800">
      <div className="text-[18px] flex justify-center  text-gray-600 mb-5">
        <Link to="/" className="text-blue-600 hover:underline">QuickTalk</Link> &nbsp;»&nbsp; 
        <span className="text-gray-800 font-semibold">Terms of Service</span>
      </div>

      <h1 className="text-3xl font-bold mb-6 text-center">Terms of Service</h1>

      <section className="mb-8">
        <h2 className="font-bold text-lg mb-1">Terms of Service for QuickTalk</h2>
        <p className="text-xs text-gray-500 mb-2">Last Updated: 10-11-2024</p>
      </section>

      {[
        ["1. Acceptance of Terms", `Welcome to QuickTalk, a digital marketing and communication solution provided by Technolite Business Solutions Pvt. Ltd. By downloading, installing, or using our app, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, you must refrain from using QuickTalk.`],
        ["2. Description of Service", `QuickTalk offers features to enhance business branding, customer communication, and digital marketing, including but not limited to:
        - Automated SMS and WhatsApp messaging after calls.
        - WhatsApp chatbot for customer interaction and bulk messaging.
        - A customizable digital business card link.
        - Social media marketing tools with festival and greeting templates.
        - Business mini-website creation.`],
        ["3. Eligibility", `To use QuickTalk, you must:
        - Be at least 18 years old.
        - Have the authority to bind your business or organization to these terms.
        - Ensure your use of the app complies with applicable laws and regulations.`],
        ["4. Account Registration", `To access the full features of QuickTalk, you are required to register an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.`],
        ["5. User Responsibilities", `As a user, you agree to:
        - Use the app only for lawful purposes.
        - Refrain from sharing inappropriate, harmful, or illegal content through the app.
        - Ensure that information provided during registration and use is accurate and up to date.
        - Operate the automated messaging features in compliance with local and international communication laws, including obtaining user consent where necessary.`],
        ["6. Permissions and Restrictions", `QuickTalk requires certain permissions, such as access to contacts, call logs, SMS, and storage, to function effectively. By granting these permissions, you acknowledge that these are essential for the app’s features. Any misuse or unauthorized use of the app is strictly prohibited.

        You are restricted from:
        - Reverse engineering, decompiling, or modifying the app.
        - Using the app to send spam or unauthorized marketing messages.
        - Accessing or using the app in a manner that disrupts its functionality.`],
        ["7. Payment and Subscription", `Some features of QuickTalk are available on a subscription basis. By subscribing, you agree to pay the applicable fees and charges, which are non-refundable unless required by law. Technolite Business Solutions Pvt. Ltd. reserves the right to change subscription rates or introduce new charges with prior notice.`],
        ["8. Data and Privacy", `Your use of QuickTalk is governed by our Privacy Policy, which explains how we collect, use, and protect your information. By using the app, you consent to our data practices as outlined in the Privacy Policy.`],
        ["9. Intellectual Property", `All content, trademarks, and materials available on QuickTalk, including the app’s features, design, and software, are the exclusive property of Technolite Business Solutions Pvt. Ltd. You may not reproduce, distribute, or create derivative works without prior written consent.`],
        ["10. Third-Party Services", `QuickTalk may integrate or use third-party services, such as WhatsApp and cloud storage. Technolite Business Solutions Pvt. Ltd. is not responsible for the content, privacy practices, or service interruptions of these third-party services.`],
        ["11. Limitation of Liability", `To the maximum extent permitted by law, Technolite Business Solutions Pvt. Ltd. shall not be liable for:
        - Any direct, indirect, incidental, or consequential damages arising from your use of QuickTalk.
        - Unauthorized access to your account or data.
        - Any interruptions or downtime caused by third-party service providers.`],
        ["12. Termination", `Technolite Business Solutions Pvt. Ltd. reserves the right to suspend or terminate your account or access to QuickTalk if:
        - You violate these Terms of Service.
        - Your use of the app is found to be unlawful or harmful to others.
        - Required by law or regulatory authorities.

        Upon termination, your access to the app and its features will be revoked.`],
        ["13. Modifications to Terms", `Technolite Business Solutions Pvt. Ltd. reserves the right to update or modify these terms at any time. We will notify you of significant changes through the app or by other means. Your continued use of QuickTalk after such updates constitutes your acceptance of the revised terms.`],
        ["14. Governing Law", `These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.`],
        ["15. Contact Us", `For any questions or concerns regarding these Terms of Service, please contact us:

        Technolite Business Solutions Pvt. Ltd. Address: 525, Suratwala Mark Plazzo Hinjewadi Pune 411057 MH India
        Email: info@quicktalk.store
        Phone: +91 8530055138`]
      ].map(([title, content], i) => (
        <section key={i} className="mb-8">
          <h2 className="font-bold text-2xl text-gray-600 mb-2">{title}</h2>
          {content.split("\n").map((line, j) => (
            <p key={j} className="mb-1 text-[16px] font-semibold text-gray-500 whitespace-pre-line">{line}</p>
          ))}
        </section>
      ))}
    </div>
  </>   
  )
}

export default Terms
