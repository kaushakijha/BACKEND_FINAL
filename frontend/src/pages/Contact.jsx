import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Toast will disappear after 3 seconds
  };

  return (
    <div className="px-6 md:px-12 lg:px-20 py-10 bg-blue-50">
      {/* Contact Header */}
      <div className="text-center text-3xl md:text-4xl font-bold text-gray-700">
        <p>
          CONTACT <span className="text-primary">US</span>
        </p>
      </div>

      {/* Contact Content */}
      <div className="my-12 flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Contact Image */}
        <img
          className="w-full h-96 max-w-[350px] md:max-w-[450px] lg:max-w-[550px] rounded-lg shadow-md flex-shrink-0"
          src={assets.contact_image}
          alt="Contact us"
        />

        {/* Contact Form on the Right */}
        <div className="flex flex-col gap-6 w-full md:w-2/5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Your Message"
              required
              className="px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary h-40 resize-none"
            ></textarea>
            <button
              type="submit"
              className="border border-primary px-8 py-3 text-sm md:text-base hover:bg-primary hover:text-white transition-all duration-300 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded-md shadow-lg">
          <p>Thanks for contacting us! We will get back to you shortly.</p>
        </div>
      )}

      {/* Contact Info */}
      <div className="my-12 flex flex-col items-center gap-6 text-center">
        <div>
          <p className="font-semibold text-lg md:text-xl text-gray-800">OUR OFFICE</p>
          <p className="mt-2 text-gray-600">
            00000 Willms Station <br />
            Suite 000, Washington, USA
          </p>
        </div>
        <div>
          <p className="text-gray-600">
            <b>Tel:</b> +1-212-456-7890 <br />
            <b>Email:</b> mediconnect@gmail.com
          </p>
        </div>
        <div>
          <p className="font-semibold text-lg md:text-xl text-gray-800">CAREERS AT MEDICONNECT</p>
          <p className="mt-2 text-gray-600">Learn more about our teams and job openings.</p>
        </div>
        <button className="border border-primary px-8 py-3 text-sm md:text-base hover:bg-primary hover:text-white transition-all duration-300 rounded-md">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Contact;
