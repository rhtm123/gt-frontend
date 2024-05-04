import Link from "next/link"
export default function Navabar () {


    return(

      <div className="sticky top-0 z-50 navbar bg-base-300">
      <div className="flex-1">
        <Link href="/"className="btn btn-ghost text-xl">CC Tech</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </div>
    )
}