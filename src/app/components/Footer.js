'use client'

import Link from "next/link";
import { useTheme } from 'next-themes'
import React from "react";


export default function Footer(){



  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://thelearningsetu.com/static/js/gt.js";
    script.async = true;
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

    return(

      <>

<footer className="footer bg-base-200 text-base-content p-10">
  <aside>
    
    <img src="/image/logo.png" width={48} />

    <p>
      GrowTech Lab
      <br />
      Providing reliable services in afforable price
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <Link href="/apna-business-apna-website" className="link link-hover">Apna Website</Link>
    <Link href="/services" className="link link-hover">All Services</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    
    <Link href="/contact" className="link link-hover">Contact Us</Link>
    <Link href="/versions" className="link link-hover">App History</Link>

  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <Link href="/privacy-policy" className="link link-hover">Privacy Policy</Link>

    <Link href="/terms-of-service" className="link link-hover">Terms of Service</Link>
    <Link href="/payment-policy" className="link link-hover">Payment Policy</Link>
   
  </nav>
</footer>

      <footer className="footer gap-y-2 footer-center p-4 bg-base-300 text-base-content rounded">

      <div className='py-0 flex'>
            <span>Select Theme: </span>
            <select className="select select-sm" value={theme} onChange={e => setTheme(e.target.value)}>
              <option value="system">System</option>
              <option value="light">light</option>
              <option value="dark">dark</option>
            </select>
      </div>

      <aside>
        <p className="opacity-60">Copyright © 2024 - All right reserved by Learning Setu Private Ltd</p>
      </aside>
    </footer>

    </>

    )
}