// src/app/services/page.js
"use client"
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useRouter } from 'next/navigation';
import Link from "next/link";


export default function Services() {

    const router = useRouter();
  // Define an array of objects containing the content for each card in the first section
  const designServicesData = [
    {
      title: "Website designing",
      description: "We are a professional & creative web design agency. CodeWitty offers user-centric design services with proficiency in Website Designing.",
      imageUrl: "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
    },
    {
      title: "UI & UX services",
      description: "We offer user-centric UI & UX design solutions to solve the user’s problems which can increase user engagement and organic traffic to your website.",
      imageUrl: "https://cdn.pixabay.com/photo/2017/05/14/16/05/ui-2312399_1280.jpg",
    },
    {
      title: "Landing page designing",
      description: "CC Tech expert team developed highly convertible & performance-optimized Landing pages for your PPC marketing campaigns to generate quality leads & drive your ROI upward.",
      imageUrl: "https://cdn.pixabay.com/photo/2020/11/09/06/33/website-5725733_1280.png",
    },
    {
      title: "Website redesigning",
      description: "Your website is the first point of contact, regardless of whether it's upgrading CMS, integrating new functionality, refined blogs, or a more modern user experience, you need website redesigning services.",
      imageUrl: "https://cdn.pixabay.com/photo/2016/09/13/11/08/browser-1666995_1280.png",
    },
    {
      title: "E-mailer designing",
      description: "We offer a variety of email templates to suit your email marketing needs. From responsive layouts to simple designs with optimised HTML coding, we have you covered.",
      imageUrl: "https://cdn.pixabay.com/photo/2016/03/31/20/04/alphabet-word-images-1295488_1280.png",
    },
    {
      title: "Graphic design services",
      description: " Design a strong & visually appealing brand identity with a conceptual & meaningful logo design from our creatively expert team.",
      imageUrl: "https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_1280.png",
    },
    // Add more objects for other services
  ];

  // Define an array of objects containing the content for each card in the second section
  const webDevelopmentServicesData = [
    {
      title: "WordPress development",
      description: "We offer fully scalable, custom functionality, top performance, and secure WordPress Website Development solutions.",
      imageUrl: "https://cdn.pixabay.com/photo/2016/11/27/18/28/wordpress-1863504_1280.png",
    },
    {
      title: "Website Development",
      description: "Your website is the first point of contact, regardless of whether it's upgrading CMS, integrating new functionality, refined blogs, or a more modern user experience, you need website development services.",
      imageUrl: "https://cdn.pixabay.com/photo/2019/10/09/07/28/development-4536630_1280.png",
    },
    {
      title: "E-commerce Development",
      description: "We developed a feature-rich, best user experience & end-to-end eCommerce website that can help you increase user traffic, boost online sales & retain your customers.",
      imageUrl: "https://th.bing.com/th/id/OIP.HCKLr50nafiaajtSwkh6VAHaD4?rs=1&pid=ImgDetMain",
    },
    {
      title: "CMS development",
      description: "Our CMS development service allows you to fulfil particular CMS web requirements, custom plugins, and templates & assure smooth and fast functioning of the website.",
      imageUrl: "https://th.bing.com/th/id/OIP.XuA0VAfNvTKsYguhgCVrVQHaDz?rs=1&pid=ImgDetMain",
    },
    {
      title: "Mobile app development",
      description: "Our mobile application development experts can assist you with building a user-centric, easy to use mobile application that will improve the product's user experience and create more engagement with your brand.",
      imageUrl: "https://coralwebconcept.com/wp-content/uploads/2021/11/mobile-app-development.png",
    },
    {
      title: "Website audit",
      description: "The purpose of a technical website audit is to determine the overall performance of your website. To rank high on Google, a healthy website utilizes both content and technical settings strategically.",
      imageUrl: "https://th.bing.com/th/id/OIP.zZORJs9GAlu4et0m0FI8pgHaDj?rs=1&pid=ImgDetMain",
    },
    // Add more objects for other services
  ];

  const onlineMarketingServicesData = [
    {
      title: "Digital marketing services",
      description: "We offer comprehensive digital marketing services such as Google ads, SEO, Google Shopping campaigns, Google ads remarketing, and social media marketing.",
      imageUrl: "https://th.bing.com/th/id/OIP.cNR0GYJ6lL-0GKSrw0GoYwHaC9?rs=1&pid=ImgDetMain",
    },
    {
      title: "Social media marketing",
      description: "From increasing brand awareness to increasing sales, social media marketing and advertising can help your business reach its goals for businesses in B2B and B2C sectors.",
      imageUrl: "https://helloericritter.com/wp-content/uploads/2019/03/social-media-marketing-campaign.jpeg",
    },
    {
      title: "Content marketing",
      description: "From strategy to content creation to promotion, and SEO, we help you launch your content marketing campaign.",
      imageUrl: "https://th.bing.com/th/id/OIP.XgXv7raBTdwnBuX5C_5FXgHaFb?rs=1&pid=ImgDetMain",
    },
    {
      title: "SEO services",
      description: "We provide all-in-one SEO packages such as on-page SEO, off-page SEO, and technical SEO so that your most valuable audience can find you online with ease.",
      imageUrl: "https://th.bing.com/th/id/OIP.l9VDOo4NfdwCWl0H07GRHgAAAA?rs=1&pid=ImgDetMain",
    },
    {
      title: "Remarketing",
      description: "We use remarketing to get people who have already begun the buyers' journey to become paying customers by recapturing their interest.",
      imageUrl: "https://th.bing.com/th/id/OIP.veHsHl3SsMnRWzdK7V4ukwHaDh?rs=1&pid=ImgDetMain",
    },
    {
      title: "Google Ads",
      description: "Our proven approach lets you appear right where your customers are searching online, whether you're looking to fine-tune your existing campaign or get started from scratch.",
      imageUrl: "https://th.bing.com/th/id/OIP.4TTzi8Gb-HdP_yrOoU3TaAHaEk?rs=1&pid=ImgDetMain",
    },
  ];


  return (
    <section id="services" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* First Section: Designing Services */}
        <div className="lg:text-center">
          <h2 className="text-secondary font-semibold tracking-wide uppercase">
            Designing Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Creatives which builds your brand image & engage the audience
          </p>
          <p className="mt-4 max-w-7xl text-xl mx-auto">
            We offers strategic & performance-driven website design services be
            it corporate website designing and development, e-commerce website
            designing services, custom website design, website maintenance, etc.
          </p>
        </div>
        {/* Render cards for Designing Services */}
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          {designServicesData.map((service, index) => (
            <div
              key={index}
              className="card glass hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <figure className="h-[200px] flex items-center justify-center">
                <img
                  src={service.imageUrl}
                  alt="Service"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h1 className="card-title text-2xl font-bold">
                  {service.title}
                </h1>
                <p className="mt-2 text-sm">{service.description}</p>
                <div className="card-actions justify-start">
                  <Link
                    className="btn btn-primary"
                    href={`/services/${service.title.replace(/\s+/g, '-')}`}
                  >
                    {" "}
                    Know More <IoIosArrowForward />
                  </Link>
                </div>
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
        {/* Second Section: Web Design & Development Services */}
        <div className="lg:text-center">
          <h2 className="text-secondary font-semibold tracking-wide uppercase">
            Web Design & Development Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            A digital storefront, built and customized to maximize your organic
            traffic
          </p>
          <p className="mt-4 max-w-7xl text-xl opacity-80 mx-auto">
            We offer strategic & performance-driven website design services be
            it corporate website designing and development, e-commerce website
            designing services, custom website design, website maintenance, etc.
          </p>
        </div>
        {/* Render cards for Web Design & Development Services */}
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          {webDevelopmentServicesData.map((service, index) => (
            <div
              key={index}
              className="card w-96 glass hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <figure className="h-[200px] flex items-center justify-center">
                <img
                  src={service.imageUrl}
                  alt="Service"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h1 className="card-title text-2xl font-bold">
                  {service.title}
                </h1>
                <p className="mt-2 text-sm">{service.description}</p>
                <div className="card-actions justify-start">
                  <Link className="btn btn-primary" 
                  href={`/services/${service.title.replace(/\s+/g, '-')}`}

                  >
                  Know More <IoIosArrowForward />

                  </Link>
    
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dashed line */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <hr className="my-12 border-dashed border-t border-gray-300" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-secondary font-semibold tracking-wide uppercase">
            Online Marketing Services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Enhance your online presence with our marketing services
          </p>
          <p className="mt-4 max-w-7xl text-xl text-gray-500 mx-auto">
            Explore our comprehensive digital marketing services tailored to
            meet your business goals.
          </p>
        </div>
        {/* Render cards for Online Marketing Services */}
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          {onlineMarketingServicesData.map((service, index) => (
            <div
              key={index}
              className="card w-full glass hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <figure className="h-[200px] flex items-center justify-center">
                <img
                  src={service.imageUrl}
                  alt="Service"
                  className="object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h1 className="card-title text-2xl font-bold">
                  {service.title}
                </h1>
                <p className="mt-2 text-sm">{service.description}</p>
                <div className="card-actions justify-start">
                  <Link className="btn btn-primary"
                    href={`/services/${service.title.replace(/\s+/g, '-')}`}

                  
                  >
                    {" "}
                    Know More <IoIosArrowForward />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
