import {Link} from "react-router-dom";
import profile from "../../assets/images/logo.png"

const CompanyNavBar = (props) => {
  
  const onClickHandler = (ev) => {
    props.setCurrentPage(ev.target.innerHTML)
  }
  
  return (
    <div className="navbar w-full justify-center z-999">
      <div className="w-5/6">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-[40px]">Inflowence</Link></div>
            <div className="flex-0">
              <ul className="menu menu-horizontal p-2">
                <li tabindex="0">
                  <Link to="#">
                    Campaigns
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                  </Link>
                  <ul className="p-2 bg-base-200">
                    <li onClick={onClickHandler} name="Start a new campaign"><Link Link to="/company/campaign/createnew/">Start a new campaign</Link></li>
                    <li onClick={onClickHandler} name="Manage Campaign"><Link to="/company/campaign/0/">Manage Campaigns</Link></li>
                  </ul>
                </li>
                <li tabindex="0">
                  <Link to="#">
                    Inflowencers
                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                  </Link>
                  <ul className="p-2 bg-base-200">
                    <li onClick={onClickHandler} name="Search Inflowencers"><Link to="#">Search Inflowencers</Link></li>
                    <li onClick={onClickHandler} name="Your Inflowencers"><Link to="#">Your Inflowencers</Link></li>
                  </ul>
                </li>
                {/* <li onClick={onClickHandler} name="Posting Calendar"><button>Posting Calendar</button></li> */}
              </ul>
            </div>
              <div className="dropdown dropdown-end">
                <label tabindex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={profile} alt="Profile pic"/>
                  </div>
                </label>
                  <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                      <Link onClick={onClickHandler} name="Your Inflowencers" to="/company" className="justify-between">
                        Profile
                      </Link>
                    </li>
                    <li><Link to="/">Logout</Link></li>
                  </ul>
        </div>
      </div>
    </div>
 ); 
}

export default CompanyNavBar;