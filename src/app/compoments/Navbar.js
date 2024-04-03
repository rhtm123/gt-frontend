export default function Navabar () {


    return(

      <div className="sticky top-0 z-50 navbar bg-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">CC Tech</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="/#whyus">Why Us</a></li>
          <li><a href="/#projects">Projects</a></li>
          <li><a href="/#testimonials">Testimonials</a></li>


          {/* <li>
            <details>
              <summary>
                Parent
              </summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li> */}
        </ul>
      </div>
    </div>
    )
}