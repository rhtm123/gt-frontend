
import { GrTechnology } from "react-icons/gr";
import { TfiWrite } from "react-icons/tfi";
import { LuBuilding } from "react-icons/lu";

export default function Home() {
  return(
    <>
      <section>

  <div className="min-h-screen relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/squared-bg-element.svg')]">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      {/* Announcement Banner */}
      <div className="flex justify-center">

        <a
          className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400"
          href="#projects"
        >
          Explore CC Tech's Projects
          <span className="flex items-center gap-x-1">
            <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500">
              Explore
            </span>
            <svg
              className="flex-shrink-0 size-4 text-blue-600"
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </span>
        </a>
      </div>
      {/* End Announcement Banner */}
      {/* Title */}
      <div className="mt-5 max-w-xl text-center mx-auto">
        <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
          Your trusted partner for all your IT needs
        </h1>
      </div>
      {/* End Title */}
      <div className="mt-5 max-w-3xl text-center mx-auto">
        <p className="text-lg text-gray-600 dark:text-gray-400">
        We specialize in creating fast, polished websites and getting your apps on the Google Play Store. Let us help you achieve your digital goals
        </p>
      </div>


      {/* Buttons */}
      
      {/* End Buttons */}
    </div>
  </div>
      </section>

  <div id="whyus" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div>
      <img
        className="w-full 	 object-cover rounded-xl"
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29"
        alt="Image Description"
      />
    </div>
    {/* Grid */}
    <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
      <div className="lg:col-span-1">
        <h2 className="font-bold text-2xl md:text-3xl text-gray-800 dark:text-gray-200">
          We tackle the IT challenges you face
        </h2>
        <p className="mt-2 md:mt-4 text-gray-500">
        In addition to collaborating with emerging businesses to drive digital transformation, we've developed enterprise-grade solutions to address common challenges encountered across diverse products and projects.
        </p>
      </div>
      {/* End Col */}
      <div className="lg:col-span-2">
        <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
          {/* Icon Block */}
          <div className="flex gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
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
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Creative minds
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                We choose our teams carefully. Our people are the secret to
                great work. Passion drives us forward in everything we do
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
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
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Affordable Pricing
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                We provide customised service as per client requirements. We deliver services in your budget.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
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
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Industry-leading documentation
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
                We always document our code. It aids in accessing the product and future development.
              </p>
            </div>
          </div>
          {/* End Icon Block */}
          {/* Icon Block */}
          <div className="flex gap-x-5">
            <svg
              className="flex-shrink-0 mt-1 size-6 text-blue-600 dark:text-blue-500"
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
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Designing for people
              </h3>
              <p className="mt-1 text-gray-600 dark:text-gray-400">
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




  <section id="projects">
  <>
  {/* Card Blog */}
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Grid */}


    <h1 className="text-4xl py-8 font-bold">Projects by CC Tech</h1>

    
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Card */}
      <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="h-52 flex flex-col justify-center items-center bg-primary rounded-t-xl">
          

            <GrTechnology size={48} className="text-base-300" />
            

        </div>
        <div className="p-4 md:p-6">
          <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
            Online Courses
          </span>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300">
            Coding Chaska
          </h3>
          <p className="mt-3 text-gray-500">
            Coding Chaska is a online learning platform where you can find interactive courses. 
          </p>
        </div>
        <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
          <a target="_blank"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="https://www.codingchaska.com/"
          >
            Visit Site
          </a>
          <a 
            target="_blank"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="https://github.com/rhtm123/cc-frontend-v2"
          >
            Github
          </a>
        </div>
      </div>
      {/* End Card */}
      {/* Card */}
      <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="h-52 flex flex-col justify-center items-center bg-secondary rounded-t-xl">
          
            <TfiWrite size={48} className="text-base-300"  />

        </div>
        <div className="p-4 md:p-6">
          <span className="block mb-1 text-xs font-semibold uppercase text-secondary dark:text-rose-500">
            Online Editor
          </span>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 ">
            Coding Chaska Lab
          </h3>
          <p className="mt-3 text-gray-500">
            CC Lab is lightweight online editor. You can solve coding problems too. 
          </p>
        </div>
        <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
          <a target="_blank"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="https://www.codingchaskalab.com/"
          >
            Visit Site
          </a>
          <a 
            target="_blank"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="https://github.com/rhtm123/cc-lab"
          >
            Github
          </a>
        </div>
      </div>
      {/* End Card */}
      {/* Card */}
      <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="h-52 flex flex-col justify-center items-center bg-accent rounded-t-xl">

            <LuBuilding size={48} className="text-base-300"  />

        </div>
        <div className="p-4 md:p-6">
          <span className="block mb-1 text-xs font-semibold uppercase text-accent">
            Manage Society
          </span>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
            SocietySathi
          </h3>
          <p className="mt-3 text-gray-500">
            SocietySathi is designed to solve all critical problems of a Society. 
          </p>
        </div>
        <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
          <a target="_blank"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="https://www.societysathi.com/"
          >
            Visit Site
          </a>
          <a
            target="_blank"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-ee-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
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
  <div id="testimonials" className="overflow-hidden bg-slate-800">
    <div className="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl w-3/4 lg:w-1/2 mb-6 sm:mb-10 md:mb-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white font-semibold">
          Loved by business and individuals across the globe
        </h2>
      </div>
      {/* End Title */}
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card */}
        <div className="flex h-auto">
          <div className="flex flex-col bg-white rounded-xl dark:bg-slate-900">
            <div className="flex-auto p-4 md:p-6">
              <p className="text-base italic md:text-lg text-gray-800 dark:text-gray-200">
              "Working with CC Tech was a game-changer for our business. Their innovative IT solutions transformed our operations, and their dedicated team provided exceptional support every step of the way."
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-b-xl md:px-2 dark:bg-slate-700">
              <div className="flex items-center">
                {/* <div className="flex-shrink-0">
                  <img
                    className="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </div> */}
                <div className="grow ms-3">
                  <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                    Rohit Maurya
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Founder | Coding Chaska
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex h-auto">
          <div className="flex flex-col bg-white rounded-xl dark:bg-slate-900">
            <div className="flex-auto p-4 md:p-6">
              <p className="text-base italic md:text-lg text-gray-800 dark:text-gray-200">
              "I can't recommend CC Tech enough! Their expertise in web development helped us launch a stunning website that exceeded all our expectations. Their attention to detail and commitment to excellence truly sets them apart."
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-b-xl md:px-2 dark:bg-slate-700">
              <div className="flex items-center">
                {/* <div className="flex-shrink-0">
                  <img
                    className="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                    alt="Image Description"
                  />
                </div> */}
                <div className="grow ms-3">
                  <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                    Satyam Singh
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Senior Director of Operations | Society Sathi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="flex h-auto">
          <div className="flex flex-col bg-white rounded-xl dark:bg-slate-900">
            <div className="flex-auto p-4 md:p-6">
              <p className="text-base italic md:text-lg text-gray-800 dark:text-gray-200">
              "Partnering with CC Tech has been an absolute pleasure. Their proactive IT support has allowed us to focus on growing our business, knowing that our technology needs are in capable hands. Thank you for your professionalism and dedication!"
              </p>
            </div>
            <div className="p-4 bg-gray-100 rounded-b-xl md:px-2 dark:bg-slate-700">
              <div className="flex items-center">
                {/* <div className="flex-shrink-0">
                  <img
                    className="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"
                    src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
                    alt="Image Description"
                  />
                </div> */}
                <div className="grow ms-3">
                  <p className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                    Sachin Ghosh
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Business Analyst | MastDealHai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Grid */}
      {/* Grid */}
      <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
        
      <div>
          <h4 className="text-lg sm:text-xl font-semibold text-white">
            Projects Completed
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
            20+
          </p>
          <p className="mt-1 text-gray-400">partner with CC Tech</p>
        </div>

        
        {/* Stats */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-white">
            A team of
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
            15+
          </p>
          <p className="mt-1 text-gray-400">working in CC Tech</p>
        </div>
        {/* End Stats */}
        {/* Stats */}
        
        {/* End Stats */}
        {/* Stats */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-white">
            Happy customer
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
            100%
          </p>
          <p className="mt-1 text-gray-400">this year alone</p>
        </div>
        {/* End Stats */}
      </div>
      {/* End Grid */}
      {/* SVG Element */}
      <div
        className="absolute bottom-0 end-0 transform lg:translate-x-32"
        aria-hidden="true"
      >
        <svg
          className="w-40 h-auto sm:w-72"
          width={1115}
          height={636}
          viewBox="0 0 1115 636"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.990203 279.321C-1.11035 287.334 3.68307 295.534 11.6966 297.634L142.285 331.865C150.298 333.965 158.497 329.172 160.598 321.158C162.699 313.145 157.905 304.946 149.892 302.845L33.8132 272.418L64.2403 156.339C66.3409 148.326 61.5475 140.127 53.5339 138.026C45.5204 135.926 37.3213 140.719 35.2207 148.733L0.990203 279.321ZM424.31 252.289C431.581 256.26 440.694 253.585 444.664 246.314C448.635 239.044 445.961 229.931 438.69 225.96L424.31 252.289ZM23.0706 296.074C72.7581 267.025 123.056 230.059 187.043 212.864C249.583 196.057 325.63 198.393 424.31 252.289L438.69 225.96C333.77 168.656 249.817 164.929 179.257 183.892C110.144 202.465 54.2419 243.099 7.92943 270.175L23.0706 296.074Z"
            fill="currentColor"
            className="fill-orange-500"
          />
          <path
            d="M451.609 382.417C446.219 388.708 446.95 398.178 453.241 403.567L555.763 491.398C562.054 496.788 571.524 496.057 576.913 489.766C582.303 483.474 581.572 474.005 575.281 468.615L484.15 390.544L562.222 299.413C567.612 293.122 566.881 283.652 560.59 278.263C554.299 272.873 544.829 273.604 539.44 279.895L451.609 382.417ZM837.202 559.655C841.706 566.608 850.994 568.593 857.947 564.09C864.9 559.586 866.885 550.298 862.381 543.345L837.202 559.655ZM464.154 407.131C508.387 403.718 570.802 395.25 638.136 410.928C704.591 426.401 776.318 465.66 837.202 559.655L862.381 543.345C797.144 442.631 718.724 398.89 644.939 381.709C572.033 364.734 504.114 373.958 461.846 377.22L464.154 407.131Z"
            fill="currentColor"
            className="fill-cyan-500"
          />
          <path
            d="M447.448 0.194357C439.203 -0.605554 431.87 5.43034 431.07 13.6759L418.035 148.045C417.235 156.291 423.271 163.623 431.516 164.423C439.762 165.223 447.095 159.187 447.895 150.942L459.482 31.5025L578.921 43.0895C587.166 43.8894 594.499 37.8535 595.299 29.6079C596.099 21.3624 590.063 14.0296 581.818 13.2297L447.448 0.194357ZM1086.03 431.727C1089.68 439.166 1098.66 442.239 1106.1 438.593C1113.54 434.946 1116.62 425.96 1112.97 418.521L1086.03 431.727ZM434.419 24.6572C449.463 42.934 474.586 81.0463 521.375 116.908C568.556 153.07 637.546 187.063 742.018 200.993L745.982 171.256C646.454 157.985 582.444 125.917 539.625 93.0974C496.414 59.978 474.537 26.1903 457.581 5.59138L434.419 24.6572ZM742.018 200.993C939.862 227.372 1054.15 366.703 1086.03 431.727L1112.97 418.521C1077.85 346.879 956.138 199.277 745.982 171.256L742.018 200.993Z"
            fill="currentColor"
            className="fill-white"
          />
        </svg>
      </div>
      {/* End SVG Element */}
    </div>
  </div>
  {/* End Testimonials */}
</>

  </section>


    </>
  );
}
