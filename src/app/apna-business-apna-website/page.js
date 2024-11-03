"use client"

import { BiSupport } from "react-icons/bi";
import { LuClock } from "react-icons/lu";

import { CgWebsite } from "react-icons/cg";
import { RiReactjsFill } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";


import { BiLeaf } from "react-icons/bi";

import { RiSeoLine } from "react-icons/ri";
import Link from "next/link";
import React from "react";
import { myFetch } from "@/utils/myFetch";

import { useEffect } from "react";


export default function ApnaBusiness(){



    const [selected, setSelected] = React.useState("");
    const [formData, setFormData] = React.useState({});
    const [submitting , setSubmitting] = React.useState(false);
    const [submitted, setSubmitted] = React.useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {

    console.log("handleSubmit");
    e.preventDefault();
    setSubmitting(true);

    try {
    let url = "/api/contact"
    formData['message'] = `Apna Business Apna Website. Selected plan - ${selected}`
    let data = await myFetch(url, "POST", formData);
    // console.log(formData);

    // console.log(data);
    setSubmitted(true);

    }
    catch (e) { 
        console.log(e);
    } 
    finally{
        setSubmitting(false);
    }
    
    // console.log(name, email, password, address);
}


    const showModal = (selected) => {
      setSubmitted(false);
      setSelected(selected);
      document.getElementById('my_modal_2').showModal()
    }


    return (
        <>
<section  className="bg-primary px-4 py-8 md:px-8 text-white">
  <div className="flex flex-col md:flex-row items-center text-center md:text-left">
    <div className="md:w-1/2">
      <img  src="/image/apna-website-hero.jpg" alt="Hero Image" className="w-full h-auto rounded-lg shadow-lg" />
    </div>
    <div className="md:w-1/2 mt-8 md:mt-0 md:ml-10">
      <h1  className="text-5xl font-bold mb-4">Apna Business Apna Website</h1>
      <p  className="text-xl mb-8">Get your own website to boost your business. We provide the best solutions for creating a professional and effective online presence.</p>
      
      <a  href="https://wa.me/+919518901902" target="_blank" rel="noopener noreferrer" className="btn mr-2">
        WhatsApp
      </a>
      <a  href="tel:+919518901902" className="btn">
        Call Us
      </a>
    </div>
  </div>
</section>

<section  className="mx-4 py-16 md:mx-8">
  <h2 className="text-4xl font-bold mb-4 text-center">Features</h2>
  <p className="text-xl text-center opacity-90 mb-8">Explore the powerful features that make our service unique and efficient.</p>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="shadow-md text-center p-6 bg-base-200 hover:bg-base-300 transition duration-300 rounded-lg" >
      <div className="mb-4 flex justify-center" >
        <BiSupport className="text-primary w-12 h-12" />
      </div>
      <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
      <p className="opacity-90">Get round-the-clock support to ensure your website is always up and running.</p>
    </div>
    <div className="shadow-md text-center p-6 bg-base-200 hover:bg-base-300 transition duration-300 rounded-lg" >
      <div className="mb-4 flex justify-center">
        <LuClock className="text-primary w-12 h-12" />
        
      </div>
      <h3 className="text-2xl font-bold mb-2">Fast Setup</h3>
      <p className="opacity-90">Launch your website quickly with our streamlined setup process.</p>
    </div>
    <div className="shadow-md text-center p-6 bg-base-200 hover:bg-base-300 transition duration-300 rounded-lg" >
      <div className="mb-4 flex justify-center">
        <CgWebsite className="text-primary w-12 h-12" />
      </div>
      <h3 className="text-2xl font-bold mb-2">Custom Design</h3>
      <p className="opacity-90">{`Stand out with a website design that's uniquely yours.`}</p>
    </div>
    <div className="shadow-md text-center p-6 bg-base-200 hover:bg-base-300 transition duration-300 rounded-lg" >
    <div className="mb-4 flex justify-center">
        <RiReactjsFill className="text-primary w-12 h-12" />
      </div>
      <h3 className="text-2xl font-bold mb-2">React & Tailwind</h3>
      <p className="opacity-90">Built with modern technologies for optimal performance and customization.</p>
    </div>
    <div className="shadow-md text-center p-6 bg-base-200 hover:bg-base-300 transition duration-300 rounded-lg" >
    <div className="mb-4 flex justify-center">
        <BiLeaf className="text-primary w-12 h-12" />
      </div>
      <h3 className="text-2xl font-bold mb-2">Lightweight Pages</h3>
      <p className="opacity-90">Enjoy faster load times with our optimized and lightweight page designs.</p>
    </div>
    <div className="shadow-md text-center p-6 bg-base-200 hover:bg-base-300 transition duration-300 rounded-lg" >
    <div className="mb-4 flex justify-center">
        <RiSeoLine className="text-primary w-12 h-12" />
      </div>
      <h3 className="text-2xl font-bold mb-2">SEO Friendly</h3>
      <p className="opacity-90">{`Boost your website's visibility with our SEO-friendly features and practices.`}</p>
    </div>
  </div>
</section>



<section  className="px-4 md:px-8 py-12 bg-gradient-to-r from-primary to-secondary  rounded-lg">
  <h2 className="text-4xl font-bold text-base-100 mb-4 text-center">Pricing</h2>
  <p className="text-xl text-center text-base-200 mb-8">Choose a plan that fits your needs and budget.</p>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    <div  className="shadow-lg p-6 bg-base-100 rounded-lg flex flex-col justify-between">
      <div className="pb-4 text-center">
      <h3 className="text-2xl font-bold mb-2">Starter</h3>
      <p className="opacity-90 mb-4">Ideal for beginners.</p>
      <p className="mb-4">
      <span className="text-3xl font-bold">₹2,499 </span>
      
      <span className="tetx-xl line-through	">₹4,499</span>
      </p>
      <ul className="text-left opacity-90">
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />1 Landing Page</li>
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />Built with React+Tailwind</li>
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />SEO friendly page</li>
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />Responsive designing</li>
        {/*<li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />1st year domain name</li>*/}
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />1st year hosting</li>
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />24/7 support</li>

      </ul>
      </div>
      <div>
        <p className="pb-2 font-semibold">*No hidden charges</p>
        <button  className="btn btn-primary w-full" onClick={()=>showModal("Starter")}>Choose Now</button>
      </div>

      {/* <Link href="/contact" className="btn btn-primary">Contact Us</Link> */}

    </div>
    <div  className="shadow-lg p-6 bg-base-100 rounded-lg flex flex-col justify-between">
      <div className="text-center pb-4">
      <h3 className="text-2xl font-bold mb-2">Basic</h3>
      <p className="mb-4">Perfect for starting out.</p>
      {/* <p className="text-3xl font-bold mb-4">₹4,499</p> */}

      <p className="mb-4">
      <span className="text-3xl font-bold">₹4,499 </span>
      
      <span className="tetx-xl line-through	">₹6,499</span>
      </p>

      <ul className="text-left">
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />5 static pages</li>
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />Built with React+Tailwind</li>
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />SEO friendly page</li>
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />Responsive designing</li>
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />1st year domain name</li>
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />1st year hosting</li>
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />24/7 support</li>
      </ul>

      </div>

      <div>
        <p className="pb-2 font-semibold">*No hidden charges</p>
        <button  className="btn btn-primary w-full" onClick={()=>showModal("Basic")}>Choose Now</button>
      </div>

      {/* <Link href="/contact" className="btn btn-primary">Contact Us</Link> */}

    </div>
    <div  className="shadow-lg p-6 bg-base-100 rounded-lg flex flex-col justify-between">
      <div className="pb-4 text-center ">
      <h3 className="text-2xl font-bold mb-2">Standard</h3>
      <p className="mb-4">For growing businesses.</p>
      {/* <p className="text-3xl font-bold mb-4">₹14,499</p> */}
      <p className="mb-4">
      <span className="text-3xl font-bold ">₹14,499 </span>
      
      <span className="tetx-xl line-through	">₹19,499</span>
      </p>

      
      <ul className="text-left">
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />5 static pages</li>
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />Built with React+Tailwind</li>
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />SEO friendly page</li>
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />Responsive designing</li>
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />1st year domain name</li>
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />1st year hosting</li>
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-6 h-6" />Unlimited blogs creation [WYSIWYG editor]</li>
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />24/7 support</li>
      </ul>
      </div>

      <div>
        <p className="pb-2 font-semibold">*No hidden charges</p>
        <button  className="btn btn-primary w-full" onClick={()=>showModal("Standard")}>Choose Now</button>
      </div>


      {/* <Link href="/contact" className="btn btn-primary">Contact Us</Link> */}

    </div>
    <div  className="shadow-lg text-center p-6 bg-base-100 rounded-lg flex flex-col justify-between">  
      <div className="pb-4">
      <h3 className="text-2xl font-bold mb-2">Premium</h3>
      <p className="mb-4">For established businesses.</p>
      <p className="text-3xl font-bold mb-4">Contact us*</p>
      <ul className="text-left opacity-95">
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />Advanced features</li>
        <li className="flex items-center"><FaRegCheckCircle className="text-success mr-2 w-4 h-4" />Premium support</li>
      </ul>
      </div>
      <button  className="btn btn-primary" onClick={()=>showModal("Premium")}>Choose Now</button>

      {/* <Link href="/contact" className="btn btn-primary">Contact Us</Link> */}

    </div>
  </div>
</section>


<dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>

    {!submitted && <h3 className="font-bold text-lg">Fill the form!</h3>}

    {submitted && 
    <div className="p-4">
      <p className="text-success">Form submission is successful. Our team will contact you soon.</p>
    </div>
    }

    {!submitted && <form onSubmit={handleSubmit}>

      <div className="pt-2">
            <label
              className="block text-sm opacity-80 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="input w-full"
              id="name"
              type="text"
              required
              name="name"
              value={formData.name}
              onChange={handleChange}

              placeholder="Enter your name"
            />
          </div>
          <div className="pt-2">
            <label
              className="block text-sm opacity-80 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="input w-full"
              id="email"
              type="email"

              required
              name="email"
              value={formData.email}
              onChange={handleChange}

              placeholder="Enter your email"
            />
          </div>
          <div className="pt-2">
            <label
              className="block text-sm opacity-80 font-bold mb-2"
              htmlFor="contact"
            >
              Mobile
            </label>
            <input
              className="input w-full"
              id="contact"
              type="text"

              required
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter your contact number"
            ></input>
      </div>

      {!submitting && (
    <div className="pt-4">
      <input type="submit" className="btn btn-primary" />
    </div>
  )}

  {submitting && (
    <div className="pt-4">
      <button className="btn">
        <span className="loading loading-spinner"></span>
        loading
      </button>
    </div>
  )}

    </form>
    }
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>



<section  className="bg-base-100 py-20">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-6">What are you waiting for?</h2>
    <p className="text-xl mb-8">Contact us today and start your journey towards a successful online presence.</p>

    <Link  href="/contact" className="btn btn-primary">Contact Us</Link>
  </div>
</section>


        </>
    )
} 