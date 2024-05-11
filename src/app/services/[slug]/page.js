"use client"
import React from 'react';
import servicesData from '../../data/services.json'; 
import Head from 'next/head';
import { useState } from 'react';
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import ContactForm from '@/app/components/ContactForm';
import Link from 'next/link';



async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const {slug } = params;
 
  
  const service = servicesData.services.find(service =>
    decodeURIComponent(service.title) === decodeURIComponent(slug.replace(/-/g, ' '))
  );
 
  return {
    title: `${service.title} | CC Tech`,
    description: `${service.description}`,
  }
}



export default function ServicePage({ params }){
   const { slug } = params;
   const [currentIndex, setCurrentIndex] = useState(0);

  const nextIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const prevIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };
// Find the service object based on the slug parameter
  const service = servicesData.services.find(service =>
    decodeURIComponent(service.title) === decodeURIComponent(slug.replace(/-/g, ' '))
  );

  if (!slug) {
    return <span className="m-8 loading loading-dots loading-sm"></span>; 
  }

  
  // If the service is not found, you can display a 404 page or any other fallback content
  if (!service) {
    return <div className='p-8'>Service not found</div>;
  }
  
    return (
      <>
        <Head>
          <title>{service.title} | CC Tech</title>
          <meta name="description" content={service.description} />

        </Head>
        <div className="bg-base-200 py-10 " >
          <div className="mx-auto px-4  md:px-8 flex flex-wrap justify-center items-center">
            <div className="w-full lg:w-1/2 px-4 flex flex-wrap justify-content-center">
              <h1 className="text-4xl font-bold text-left mb-8">
                Trusted {service.title} Services In India
              </h1>
              <p className="text-left text-lg mb-8">{service.description}</p>
              <div className="flex justify-left">
                <button className="btn btn-primary">
                  <Link href={"/contact"}>Request Quote</Link>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className='bg-base-300 p-8 rounded-lg'>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-wrap px-4 md:px-4 py-16">
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
        <div className="max-w-7xl mx-auto px-4 md:px-8 sm:px-6 lg:px-8">
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
        <div className="mt-10 grid gap-10 lg:grid-cols-3 xl:grid-cols-3">
          {service.subServices.map((subServices, index) => (
            <div
              key={index}
              className="card glass hover:scale-105 transition-transform duration-300 ease-in-out"
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
      <div className="max-w-4xl mx-auto px-4 md:px-8 sm:px-6 mt-12">
        <hr className="my-12 border-dashed border-t border-gray-300" />
      </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 sm:px-6 mt-12">
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
              className="card glass hover:scale-105 transition-transform duration-300 ease-in-out"
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
      <div className="flex justify-center space-x-4">
        {[-1, 0, 1].map((offset) => {
          const index = (currentIndex + offset + 3) % 3;
          const industriesServed = service.industriesServed[index];
          return (
            <div
              key={index}
              className={`card w-96 glass transition-transform duration-1000 ease-in-out`}
              style={{
                zIndex: 3 - Math.abs(offset),
                transform: `translateX(${1 * offset}%) scale(${offset === 0 ? 1.2 : 1})`,
              }}
            >
              <div className="card-body">
                <h1 className="card-title text-2xl font-bold">
                  {industriesServed?.title}
                </h1>
                <p className="mt-2 text-sm">{industriesServed?.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between items-center w-full px-4 z-20">
  <button onClick={prevIndex} className="focus:outline-none text-gray-500 hover:text-gray-900 z-10">
    <BsArrowLeftCircle className="h-8 w-8" />
  </button>
  <button onClick={nextIndex} className="focus:outline-none text-gray-500 hover:text-gray-900 z-10">
    <BsArrowRightCircle className="h-8 w-8" />
  </button>
</div>

    </div>
      </div>
      </>
    );
}

