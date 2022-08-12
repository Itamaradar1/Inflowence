import {Link} from "react-router-dom";


const NavBar = (props) => {

return (
  <div className="navbar w-full flex justify-center">
    <div className="w-5/6">
      <div className="flex-1">
      <Link Link to="/" className="btn btn-ghost normal-case text-[40px]">Inflowence</Link>
      </div>
        <div className="flex-none ">
          <ul className="menu menu-horizontal p-0">
            <li tabindex="0">
              <Link Link to="/">
              For influencers
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </Link>
              <ul className="p-2 bg-base-200">
              <li><Link Link to="/register">Register</Link></li>
              
              </ul>
            </li>
              <li tabindex="0">
                <Link Link to="/">
                For companies
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                </Link>
                <ul className="p-2 bg-base-200">
                <li><Link Link to="/book_a_demo">Book a Demo</Link></li>
               
                </ul>
              </li>
              <li><Link Link to="/Contact">Contact us</Link>
                </li>
                <li><Link Link to="/about">Our story</Link>
                </li>
                <li><Link Link to="/login">Login</Link></li>
        </ul>
      </div>
    </div>    
  </div>
);
}
export default NavBar;