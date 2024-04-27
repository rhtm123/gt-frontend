"use client"
import React from "react";
import { useState } from "react";

function contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false); // New state for loading
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">Contact us</h1>
        <h3 className="text-xl mb-8">
          Request a free estimate and analysis. Boost your digital marketing
          success with us.
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="bg-white p-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
            <h2 className="text-3xl font-bold mb-2">Get in touch</h2>
            <h4 className="text-lg mb-4">
              Find how we can assist your business to grow. Ready to speak with
              an expert?
            </h4>
            <form className="space-y-4">
              <div className=" flex mb-4">
                <div className="w-1/2 mr-2">
                  <label for="name" className="block font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label for="email" className="block font-semibold">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 mr-2">
                  <label for="company" className="block font-semibold">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label for="contact" className="block font-semibold">
                    Your Number
                  </label>
                  <input
                    type="number"
                    id="number"
                    name="contact"
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-yellow-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-yellow-600 transition duration-300"
              >
                Get started now
              </button>
            </form>
          </div>
          <div className="grid grid-cols-1 gap-4 ">
            <div className="bg-white p-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
              <h2 className="text-xl font-bold mb-4">Call us today</h2>
              <p className="text-gray-600 flex items-start mx-2">
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>

                  <span className="mx-2 ">9518-90-1902 </span>
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
              <h2 className="text-xl font-bold mb-4">Send an email</h2>
              <p className="text-gray-600 flex items-start mx-2">
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <span className="mx-2">codingchaska.info@gmail.com</span>
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
              <h2 className="text-xl font-bold mb-4 flex items-start mx-2">Our location</h2>
              <p className="text-gray-600 flex items-start mx-2">
              <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <span className="mx-2">
                    005, Jay Vijay Nagar Building 3, Naigaon East
                  </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default contact;