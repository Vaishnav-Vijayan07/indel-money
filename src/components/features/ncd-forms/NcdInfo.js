"use client";

import Image from "next/image";
import { useState } from "react";

export default function NcdInfo({content}) {

 const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    state: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleReset = () => {
    setFormData({
      name: '',
      mobile: '',
      email: '',
      state: ''
    });
  };

  const indianStates = [
    'None',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal'
  ];

  // Form component to reuse
  const ContactForm = ({ isMobile = false }) => (
    <div className={`${isMobile ? 'w-full bg-blue-700 p-4 sm:p-6' : 'w-full lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl lg:w-[40%] bg-blue-700 p-4 sm:p-6 md:p-8'} flex flex-col justify-center ${isMobile ? 'min-h-[500px]' : 'min-h-[600px] lg:min-h-0'}`}>
      <div className="max-w-md mx-auto w-full lg:max-w-none">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-white text-sm font-medium mb-2">
              Name*
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          {/* Mobile Field */}
          <div>
            <label htmlFor="mobile" className="block text-white text-sm font-medium mb-2">
              Mobile*
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              className="w-full px-3 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
              Email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          {/* State Field */}
          <div>
            <label htmlFor="state" className="block text-white text-sm font-medium mb-2">
              State*
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full px-3 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              required
            >
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state === 'None' ? '-None-' : state}
                </option>
              ))}
            </select>
          </div>

          {/* Terms and Privacy */}
          <div className="text-xs sm:text-sm text-white leading-relaxed">
            By submitting this form, you agree to receive marketing and promotional communications from IndMoney.
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-800 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md transition-all duration-200 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-md transition-all duration-200 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <>
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Mobile Layout - Stacked vertically */}
        <div className="flex flex-col lg:hidden w-full">
          {/* Section 1 - Top Banner */}
          <div className="flex-shrink-0">
            <Image
              src={content?.banner_image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${content?.banner_image}` : "/images/employeeTestimonialsVideo-2.jpg"}                 
              alt={content?.banner_image_alt}
              width={640}
              height={300}
              className="w-full max-h-[150px] object-cover"
            />
          </div>

          {/* Section 2 - Scrollable Description */}
          <div className="min-h-[250px] sm:min-h-[300px] md:min-h-[350px] bg-white overflow-hidden">
            <div className="h-full bg-white bg-opacity-90 p-3 sm:p-4 md:p-6 rounded-lg overflow-y-auto">
              <p className="text-gray-800 text-xs sm:text-sm leading-relaxed py-2 sm:py-4">
                {content?.content}     
              </p>
            </div>
          </div>

          {/* Contact Form - Mobile */}
          <ContactForm isMobile={true} />

          {/* Section 3 - Bottom Banner */}
          <div className="min-h-[150px] sm:min-h-[250px] md:min-h-[300px] bg-black bg-opacity-90 relative overflow-hidden">
            <Image
              src={content?.second_banner_image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${content?.second_banner_image}` : "/images/employeeTestimonialsVideo-2.jpg"}
              alt={content?.second_banner_image_alt}
              width={640}
              height={300}
              className="w-full max-h-[150px] object-cover"
            />
          </div>
        </div>

        {/* Desktop Layout - Side by side */}
        <div className="hidden lg:flex lg:flex-row w-full min-h-screen">
          {/* Left Side - 3 Sections */}
          <div className="flex-1 flex lg:w-[60%] flex-col">
            
            {/* Section 1 - Top Banner */}
            <div className="flex-1 max-h-[300px] bg-gradient-to-br">
              <Image
                src={content?.banner_image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${content?.banner_image}` : "/images/employeeTestimonialsVideo-2.jpg"}                 
                alt={content?.banner_image_alt}
                width={640}
                height={300}
                className="w-full max-h-[300px] object-cover"
              />
            </div>

            {/* Section 2 - Scrollable Description */}
            <div className="flex-1 min-h-[375px] lg:max-h-[300px] bg-white overflow-hidden">
              <div className="h-full bg-white bg-opacity-90 p-6 rounded-lg overflow-y-auto">
                <p className="text-gray-800 text-sm leading-relaxed py-4">
                  {content?.content}     
                </p>
              </div>
            </div>
            
            {/* Section 3 - Bottom Banner */}
            <div className="flex-1 min-h-[300px] lg:max-h-[300px] bg-black bg-opacity-90 relative overflow-hidden">
              <Image
                src={content?.second_banner_image ? `${process.env.NEXT_PUBLIC_BACKEND_URL}${content?.second_banner_image}` : "/images/employeeTestimonialsVideo-2.jpg"}
                alt={content?.second_banner_image_alt}
                width={640}
                height={300}
                className="w-full max-h-[300px] object-cover"
              />
            </div>
          </div>

          {/* Right Side - Contact Form Desktop */}
          <ContactForm isMobile={false} />
        </div>
      </div>
    </>
  );
}