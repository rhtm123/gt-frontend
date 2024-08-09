import Link from "next/link";

import { SlMenu } from "react-icons/sl";

export default function Navbar () {


    return(

      <div className="sticky top-0 z-50 navbar bg-base-300">
      
      <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
        
        <SlMenu size={18} />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg> */}
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content z-[1] min-w-52 bg-base-100 rounded-box  mt-3 shadow">
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        
      </ul>
    </div>

      <div className="flex-1">
        <Link href="/"className="btn btn-ghost text-xl">

        <img src="/image/logo.png" width={28} />
        GrowTech Lab
        
        </Link>
      </div>



      <div className="flex-none hidden md:flex">
        <ul className="menu menu-horizontal px-1 items-center">
        <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li><Link className="border-dotted border-2 border-primary" href="/apna-business-apna-website">Apna website</Link></li>

        </ul>
      </div>
    </div>
    )
}