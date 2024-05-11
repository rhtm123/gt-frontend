"use client"

import { GrTechnology } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { LuBuilding } from "react-icons/lu";
import Link from "next/link";
import Head from "next/head";
import ContactForm from "./components/ContactForm";
import CounterAnimation from "./components/CounterAnimation"




export default function Home() {

  return(
    <>
    <Head>
      <title>

      </title>
      

    </Head>
    <section>
    <div className="min-h-screen relative overflow-hidden flex hero" >
    <img
            src="https://cdn.pixabay.com/photo/2016/12/01/13/10/lightbulb-1875247_1280.jpg"
            alt="Technology"
            className="absolute inset-0 object-cover w-full h-full"
          />
          <div className="relative mx-auto md:py-4 py-12 px-4 md:px-8 pt-18 pb-10 flex flex-wrap justify-center items-center">
            <div className="w-full md:w-7/12 px-4 flex flex-wrap justify-content-center">
              <h1 className="text-4xl text-base-100 bg-base-content bg-opacity-60 py-2 px-4 font-bold text-left mb-8">
              Empowering your digital success
              </h1>
              <h2 className="text-base-100 bg-base-content bg-opacity-50 py-2 px-4 text-xl mb-8">
              Elevate Your Online Presence with Expert Website Development, Mobile App Creation, and Strategic Digital Marketing Solutions. Empower Your Brand with Our Seamless Integration of Design, Development, and Marketing Strategies.
              </h2>
              <div className="flex justify-left">
                <button href="/services" className="btn btn-primary">
                  <Link href="/services">View All Services</Link>
                </button>
              </div>
            </div>
            <div className="w-full md:w-5/12 px-4 md:py-4 py-12">
              <div className="bg-base-300 rounded-lg p-8">
              <ContactForm />
              </div>
            </div>
          </div>
        </div>


    </section>

  <section>
    <div  className="min-h-screen relative overflow-hidden">
  <div className="mx-auto flex flex-wrap px-4 md:px-8 py-16">
          <div className="w-full md:w-1/2 px-4">
          <img
            src="/section-2.png"
            alt="Technology"
            className=""
          />
          {/* <h2 className="text-2xl font-bold py-4">Design, Develop & Market</h2>
            <p className="text-lg">
              We specialize in the design, development, and marketing of products or services.
            </p> */}
          </div>
          <div className="w-full md:w-1/2 px-4">
          {/* <h3 className="box-border h-8 w-32 border-2 text-center font-semibold mb-4">Who We Are?</h3> */}
          <h1 className="text-4xl font-bold mb-8">Grow Your Business Online with Your Trusted IT Partner</h1>
            <p className="mb-8 font-semibold">
            {`We're CC-Tech, a leading Mumbai-based IT solutions provider. We specialize in the design, development, and marketing of products or services. We help businesses of all sizes achieve their digital goals with a powerful combination of services`}
            </p>
                      <h3 className="box-border h-8 w-32 border-2 text-center font-semibold mb-4">Why Us?</h3>

            <p className="mb-2">
              <span className="font-semibold">Deep Industry Knowledge</span> : We understand the unique challenges and opportunities faced by businesses in your sector.
            </p>
            <p className="mb-2">
            <span className="font-semibold">Proven Track Record</span> : We have a history of success in delivering impactful digital solutions for diverse clients.
            </p>
            <p className="mb-2">
            <span className="font-semibold">Customized Approach</span> : We take the time to understand your specific needs and goals, tailoring our services to maximize your online impact.

            </p>

          </div>
        </div>
        </div>
  </section>
      
<div className="bg-gradient-to-r from-primary to-secondary overflow-hidden">
  <div id="whyus" className="max-w-[85rem] px-4 py-10 sm:px-6 md:px-8 md:py-14 mx-auto">
    {/* <div>
      <img
        className="w-full 	 object-cover rounded-xl"
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29"
        alt="Image Description"
      />
    </div> */}
    {/* Grid */}
    <div className="mt-5 md:my-8 grid md:grid-cols-3 gap-8 md:gap-12">
      <div className="md:col-span-1">
        <h2 className="font-bold text-2xl md:text-3xl text-base-100">
          We tackle the IT challenges you face
        </h2>
        <p className="mt-2 md:mt-4 text-base-200">
       {`In addition to collaborating with emerging businesses to drive digital transformation, we've developed enterprise-grade solutions to address common challenges encountered across diverse products and projects.`}
        </p>
      </div>
      {/* End Col */}
      <div className="md:col-span-2">
        <div className="grid sm:grid-cols-2 gap-8 md:gap-8">
          {/* Icon Block */}
          <div className="flex bg-base-200 rounded-lg p-4 gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 size-6 text-secondary"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width={18} height={10} x={3} y={11} rx={2} />
              <circle cx={12} cy={5} r={2} />
              <path d="M12 7v4" />
              <line x1={8} x2={8} y1={16} y2={16} />
              <line x1={16} x2={16} y1={16} y2={16} />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-primary">
                Creative minds
              </h3>
              <p className="mt-1">
                We choose our teams carefully. Our people are the secret to
                great work. Passion drives us forward in everything we do
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5 bg-base-200 rounded-lg p-4">
            <svg
              className="flex-shrink-0 mt-1 size-6 text-secondary"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 10v12" />
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-primary">
                Affordable Pricing
              </h3>
              <p className="mt-1">
                We provide customised service as per client requirements. We deliver services in your budget.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5 bg-base-200 rounded-lg p-4">
            <svg
              className="flex-shrink-0 mt-1 size-6 text-secondary"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-primary">
                Industry-leading documentation
              </h3>
              <p className="mt-1">
                We always document our code. It aids in accessing the product and future development.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5 bg-base-200  rounded-lg p-4">
            <svg
              className="flex-shrink-0 mt-1 size-6 text-secondary"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx={9} cy={7} r={4} />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <div className="grow">
              <h3 className="text-lg font-semibold text-primary">
                Designing for people
              </h3>
              <p className="mt-1">
                We actively pursue the right balance between functionality and
                aesthetics, creating delightful experiences.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
        </div>
      </div>
      {/* End Col */}
    </div>
    {/* End Grid */}
  </div>

  </div>
{/* 
  <div className="bg-gray-900 py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 ">
    <h1 className="text-4xl font-bold text-white mb-6">Contact web development company India today to get started.</h1>
    <p className="text-lg text-white mb-8">Take the first step on your digital journey and contact us today to get started.</p>
    <div className="flex space-x-6 mb-8">
      <div className="flex items-center hover:text-yellow-400">
      <div className="focus:outline-none ">
      <TiTickOutline className="h-6 w-6 mr-2 " />
      </div>
       <span className="text-white">Outcome focused</span>
      </div>
      <div className="flex items-center hover:text-yellow-400">
      <div className="focus:outline-none">
      <TiTickOutline className="h-6 w-6 mr-2 " />
      </div>
         <span className="text-white">Agile methodology</span>
      </div>
      <div className="flex items-center hover:text-yellow-400">
      <div className="focus:outline-none">
      <TiTickOutline className="h-6 w-6 mr-2 " />
      </div>
           <span className="text-white">Strategic solutions</span>
      </div>
      <div className="flex items-center hover:text-yellow-400">
      <div className="focus:outline-none">
      <TiTickOutline className="h-6 w-6 mr-2 " />
      </div>
        <span className="text-white">Reliable support</span>
      </div>
    </div>
    <button className="bg-white text-gray-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 hover:text-white transition duration-300"><Link href="/contact">Schedule a free consultation</Link></button>
  </div>
</div> */}



  <section id="projects">
  <>
  {/* Card Blog */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 md:px-8 md:py-14 mx-auto">
    {/* Grid */}


    <h1 className="text-4xl py-8 font-bold">Projects by CC Tech</h1>

    
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* Card */}
      <div className="group flex flex-col h-full border rounded-lg">
        <div className="h-52 flex flex-col justify-center items-center bg-base-300 rounded-lg">
          

            <GrTechnology size={64} className="text-secondary" />
            

        </div>
        <div className="p-4 md:p-6">
          <span className="block mb-1 text-xs font-semibold uppercase text-accent">
            Online Courses
          </span>
          <h3 className="text-xl font-semibold">
            Coding Chaska
          </h3>
          <p className="mt-3 opacity-80">
            Coding Chaska is a online learning platform where you can find interactive courses. 
          </p>
        </div>
        <div className="mt-auto flex border-t border-gray-200 divide-x">
          <a target="_blank"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium"
            href="https://www.codingchaska.com/"
          >
            Visit Site
          </a>
          <a 
            target="_blank"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium"
            href="https://github.com/rhtm123/cc-frontend-v2"
          >
            Github
          </a>
        </div>
      </div>
      {/* End Card */}
      {/* Card */}
      <div className="group flex flex-col h-full border rounded-lg">
        <div className="h-52 flex flex-col justify-center items-center bg-base-300 rounded-lg">
          
            <TfiWrite size={64} className="text-secondary"  />

        </div>
        <div className="p-4 md:p-6">
          <span className="block mb-1 text-xs font-semibold uppercase text-accent">
            Online Editor
          </span>
          <h3 className="text-xl font-semibold">
            Coding Chaska Lab
          </h3>
          <p className="mt-3 opacity-80">
            CC Lab is lightweight online editor. You can solve coding problems too. 
          </p>
        </div>
        <div className="mt-auto flex border-t border-gray-200 divide-x">
          <a target="_blank"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium"
            href="https://www.codingchaskalab.com/"
          >
            Visit Site
          </a>
          <a 
            target="_blank"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium "
            href="https://github.com/rhtm123/cc-lab"
          >
            Github
          </a>
        </div>
      </div>
      {/* End Card */}
      {/* Card */}
      <div className="group flex flex-col h-full border shadow-sm rounded-lg">
        <div className="h-52 flex flex-col justify-center items-center bg-base-300 rounded-lg">

            <LuBuilding size={64} className="text-secondary"  />

        </div>
        <div className="p-4 md:p-6">
          <span className="block mb-1 text-xs font-semibold uppercase text-accent">
            Manage Society
          </span>
          <h3 className="text-xl font-semibold ">
            SocietySathi
          </h3>
          <p className="mt-3 opacity-80">
            SocietySathi is designed to solve all critical problems of a Society. 
          </p>
        </div>
        <div className="mt-auto flex border-t border-gray-200 divide-x">
          <a target="_blank"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium"
            href="https://www.societysathi.com/"
          >
            Visit Site
          </a>
          <a
            target="_blank"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium"
            href="https://github.com/rhtm123/ff-frontend"
          >
            Github
          </a>
        </div>
      </div>
      {/* End Card */}
    </div>
    {/* End Grid */}

  </div>
  {/* End Card Blog */}
</>

  </section>


  <section>

  <>
  {/* Testimonials */}
  <div id="testimonials" className="overflow-hidden bg-accent-content bg-opacity-50">
    <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 md:px-8 md:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl w-3/4 md:w-1/2 mb-6 sm:mb-10 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Loved by business and individuals across the globe
        </h2>
      </div>
      {/* End Title */}
      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Card */}
        <div className="flex h-auto">
          <div className="flex flex-col bg-accent-content bg-opacity-80 rounded-lg">
            <div className="flex-auto p-4 md:p-6">
              <p className="text-base italic md:text-lg text-neutral-content">
              &quot;Working with CC Tech was a game-changer for our business. Their innovative IT solutions transformed our operations, and their dedicated team provided exceptional support every step of the way.&quot;
              </p>
            </div>
            <div className="p-4 bg-accent-content md:px-2 rounded-lg">
              <div className="flex items-center">
                {/* <div className="flex-shrink-0">
                  <img
                    className="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </div> */}
                <div className="grow ms-3">
                  <p className="text-sm sm:text-base font-semibold text-neutral-content">
                    Rohit Maurya
                  </p>
                  <p className="text-xs text-neutral-content">
                    Founder | Coding Chaska
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex h-auto bg-accent-content bg-opacity-80 rounded-lg">
          <div className="flex flex-col ">
            <div className="flex-auto p-4 md:p-6">
              <p className="text-base italic md:text-lg text-neutral-content">
              {`"I can't recommend CC Tech enough! Their expertise in web development helped us launch a stunning website that exceeded all our expectations. Their attention to detail and commitment to excellence truly sets them apart."`}
              </p>
            </div>
            <div className="p-4 bg-accent-content rounded-lg">
              <div className="flex items-center">
                {/* <div className="flex-shrink-0">
                  <img
                    className="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </div> */}
                <div className="grow ms-3">
                  <p className="text-sm sm:text-base font-semibold text-neutral-content">
                    Satyam Singh
                  </p>
                  <p className="text-xs text-neutral-content">
                    Senior Director of Operations | Society Sathi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex h-auto ">
          <div className="flex flex-col bg-accent-content bg-opacity-80 rounded-lg">
            <div className="flex-auto p-4 md:p-6">
              <p className="text-base italic md:text-lg text-neutral-content">
              {`"Partnering with CC Tech has been an absolute pleasure. Their proactive IT support has allowed us to focus on growing our business, knowing that our technology needs are in capable hands."`}
              </p>
            </div>
            <div className="p-4 md:px-2 bg-accent-content rounded-lg">
              <div className="flex items-center">
                {/* <div className="flex-shrink-0">
                  <img
                    className="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                    src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                    alt="Image Description"
                  />
                </div> */}
                <div className="grow ms-3">
                  <p className="text-sm sm:text-base font-semibold text-neutral-content">
                    Sachin Ghosh
                  </p>
                  <p className="text-xs text-neutral-content">
                    Business Analyst | MastDealHai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
        </div>
      </div>
      </div>
      {/* End Grid */}
      {/* Grid */}
      
   <CounterAnimation />
  
  {/* End Testimonials */}
</>

  </section>


    </>
  );
}
