"use client"
import React from 'react';
import servicesData from '../../data/services.json'; 
import Head from 'next/head';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';

export default function ServicePage({ params }){
   const { slug } = params;

   if (!slug) {
      return <div>Loading service...</div>; 
    }

// Find the service object based on the slug parameter
const service = servicesData.services.find(service =>
    decodeURIComponent(service.title) === decodeURIComponent(slug.replace(/-/g, ' '))
  );
  
  // If the service is not found, you can display a 404 page or any other fallback content
  if (!service) {
    return <div>Service not found</div>;
  }
  
    return (
      <>
        <Head>
          <title>{service.title}</title>
        </Head>
        <div className="bg-gray-800 py-10 " >
          <div className="container mx-auto px-4 flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-1/2 px-4 flex flex-wrap justify-content-center">
              <h1 className="text-4xl font-bold text-left mb-8">
                Trusted {service.title} Services In India
              </h1>
              <p className="text-left text-lg mb-8">{service.description}</p>
              <div className="flex justify-left">
                <button className="btn btn-primary hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                  Request Quote
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <form className="bg-gray-900 p-8 rounded-xl shadow-md">
                <h2 className="text-3xl font-bold mb-2">Request Quote</h2>
                <h2 className="text-xl  mb-4">
                  Request a free quote from our {service.title} services in
                  india.
                </h2>
                <div className=" flex mb-4">
                  <div className="w-1/2 mr-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="w-1/2 ml-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-1/2 mr-2">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="contact"
                    >
                      Contact
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                      id="contact"
                      type="number"
                      placeholder="Enter your contact number"
                    ></input>
                  </div>
                  <div className="w-1/2 ml-2 mt-8">
                    <button className="btn btn-primary hover:bg-blue-600 text-white font-bold py-3 px-6  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-wrap px-4 py-16">
          <div className="w-full lg:w-1/2 px-4">
            <h2 className="text-3xl font-bold mb-8">{service.subtitle}</h2>
            <p className="text-lg mb-8">
              {service.subdescription
                .split(" ")
                .slice(0, service.subdescription.split(" ").length / 2)
                .join(" ")}
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <p className="text-lg mb-8">
              {service.subdescription
                .split(" ")
                .slice(service.subdescription.split(" ").length / 2)
                .join(" ")}
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Section: Services */}
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            {service.title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-400 sm:text-4xl">
            {service.additionalData.subServicesInfo[0].title}
          </p>
          <p className="mt-4 max-w-7xl text-xl text-gray-500 mx-auto">
            {service.additionalData.subServicesInfo[0].description   }
          </p>
        </div>
        {/* Render cards for Services */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {service.subServices.map((subServices, index) => (
            <div
              key={index}
              className="card w-96 glass hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="card-body">
                <h1 className="card-title text-2xl font-bold">
                  {subServices.title}
                </h1>
                <p className="mt-2 text-sm">{subServices.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dashed line */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <hr className="my-12 border-dashed border-t border-gray-300" />
      </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* First Section: Services */}
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          {service.additionalData.subServicesInfo[1].title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-400 sm:text-4xl">
            {service.additionalData.technologyInfo[1].title}
          </p>
          <p className="mt-4 max-w-7xl text-xl text-gray-500 mx-auto">
            {service.additionalData.technologyInfo[1].description   }
          </p>
        </div>
        {/* Render cards for Services */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {service.technologies.map((technologies, index) => (
            <div
              key={index}
              className="card w-96 glass hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <div className="card-body">
                <h1 className="card-title text-2xl font-bold">
                  {technologies.title}
                </h1>
                <p className="mt-2 text-sm">{technologies.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <hr className="my-12 border-dashed border-t border-gray-300" />
      </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12">
        {/* First Section: Services */}
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
          What Industries we serve?
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-400 sm:text-4xl">
          Industries we help to Grow
          </p>
          <p className="mt-4 max-w-7xl text-xl text-gray-500 mx-auto">
          Understand how we are helping the SMEs & Startup industries evolve, boost expertise & explore technologies.
          </p>
        </div>
                {/* Render cards for Services */}
                <div className="mt-10 relative">
          <div className="flex  space-x-4">
            {service.industriesServed.map((industriesServed, index) => (
              <div
                key={index}
                className="card w-96 glass hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="card-body">
                  <h1 className="card-title text-2xl font-bold">
                    {industriesServed.title}
                  </h1>
                  <p className="mt-2 text-sm">{industriesServed.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination dots */}
          <div className="flex justify-center mt-4">
            {service.industriesServed.map((_, index) => (
              <div
                key={index}
                className={`h-2.5 w-2.5 rounded-full bg-gray-300 mx-1 ${index === 1 ? 'bg-indigo-600' : ''}`}
              ></div>
            ))}
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
            <button
              
              className="focus:outline-none text-gray-500 hover:text-gray-900 left-0"
            >
              <BsArrowLeftCircle className="h-8 w-8 "/>
            </button>
            <button
             
              className="focus:outline-none text-gray-500 hover:text-gray-900 right-0"
            >
              <BsArrowRightCircle className="h-8 w-8" />
            </button>
          </div>
        </div>

      </div>
      </>
    );
}

