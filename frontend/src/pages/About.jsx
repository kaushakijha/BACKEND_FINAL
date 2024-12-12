import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-10 bg-blue-50">
      <div className="text-center text-3xl md:text-4xl font-bold text-gray-600">
        <p>
          ABOUT <span className="text-primary">US</span>
        </p>
      </div>

      <div className="my-12 flex flex-col-reverse md:flex-row gap-10 items-center">
        <div className="flex flex-col gap-6 md:w-2/3 text-sm md:text-base text-gray-600 leading-relaxed">
          <p>
            At <b className="text-primary">MediConnect</b>, we are dedicated to providing top-notch healthcare services
            to our community. Our mission is to deliver exceptional healthcare services that enhance the well-being of
            our patients through compassionate care and innovative practices.
          </p>
          <p>
            We aim to be a leader in the healthcare industry, recognized for our commitment to quality, patient-centered
            care, and community health improvement.
          </p>
          <b className="text-xl text-gray-700">Our Vision</b>
          <p>
            To be a leader in the healthcare industry, recognized for our commitment to quality, patient-centered care,
            and community health improvement.
          </p>
        </div>
        <img
          className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[600px] h-80 rounded-lg shadow-md"
          src={assets.about_image}
          alt="About us"
        />
      </div>

      <div className="text-center text-2xl font-bold text-gray-700 my-10 mt-16">
        <p>WHY <span className="text-primary mt-8">CHOOSE US</span> </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {[ 
          { title: 'EFFICIENCY', text: 'Streamlined appointment scheduling that fits into your busy lifestyle.' },
          { title: 'CONVENIENCE', text: 'Access to a network of trusted healthcare professionals in your area.' },
          { title: 'PERSONALIZATION', text: 'Tailored recommendations and reminders to help you stay on top of your health.' },
        ].map((item, index) => (
          <div
            key={index}
            className="border px-6 md:px-8 py-8 sm:py-10 bg-white rounded-full shadow-lg text-center hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer transform hover:scale-105"
          >
            <b className="block text-lg font-semibold">{item.title}</b>
            <p className="mt-4 text-sm md:text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
