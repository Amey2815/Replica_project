import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const PricingPlans = () => {
  const plans = [
    {
      title: "Starter",
      price: "Rs. 1499",
      oldPrice: "Rs. 2000",
      features: [
        "Auto Text SMS After Call",
        "Auto Whatsapp Message with media After Call",
        "Whatsapp ChatBot",
      ],
      hasChatbot: true,
      btnColor: "bg-purple-700 hover:bg-purple-800",
    },
    {
      title: "Standard",
      price: "Rs. 3299",
      oldPrice: "Rs. 3700",
      features: [
        "Auto Text SMS After Call",
        "Auto Whatsapp Message with media After Call",
        "Whatsapp ChatBot",
      ],
      hasChatbot: true,
      btnColor: "bg-green-700 hover:bg-green-800",
    },
    {
      title: "Advance",
      price: "Rs. 5299",
      oldPrice: "Rs. 6000",
      features: [
        "Auto Text SMS After Call",
        "Auto Whatsapp Message with media After Call",
        "Whatsapp ChatBot",
      ],
      hasChatbot: true,
      btnColor: "bg-black hover:bg-gray-800",
      highlight: true,
    },
  ];

  return (
    <>
    <Helmet>
      <title>Pricing - QuickTalk</title>
    </Helmet>
    <div className="bg-gradient-to-r from-blue-100 to-green-100 min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="text-[18px] flex justify-center  text-gray-600 mb-5">
        <Link to="/" className="text-blue-600 hover:underline">QuickTalk</Link> &nbsp;»&nbsp; 
        <span className="text-gray-800 font-semibold">Pricing</span>
      </div>
      <h1 className="text-3xl font-bold mb-10 text-center">Choose the right plan</h1>
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl w-full justify-center">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-lg p-6 w-full md:w-1/3 text-center relative ${
              plan.highlight ? "bg-emerald-600 text-white" : "bg-white text-gray-800"
            }`}
          >
            {plan.highlight && (
              <div className="absolute top-4 right-4 bg-yellow-400 text-black px-2 py-1 text-xs rounded-full font-bold">
                ★
              </div>
            )}
            <h2 className="text-xl font-bold mb-2">{plan.title}</h2>
            <p className="text-2xl font-semibold">
              {plan.price}
              <span className={`ml-1 text-sm ${plan.highlight ? "text-white/70" : "text-gray-500"}`}>
                /Year
              </span>
            </p>
            <p className={`mb-4 line-through ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>
              {plan.oldPrice}
            </p>
            <ul className={`text-left space-y-2 mb-6 ${plan.highlight ? "" : "text-gray-700"}`}>
              {plan.features.map((feature, idx) => (
                <li key={idx}>✔️ {feature}</li>
              ))}
              {!plan.hasChatbot && <li>❌ Whatsapp Chatbot</li>}
            </ul>
            <button
              className={`${plan.btnColor} text-white px-6 py-2 rounded-full transition duration-200`}
            >
              <a href="http://wa.me/8530055138" target="_blank" >Get started</a>
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PricingPlans;
