import {Link} from "react-router-dom";
import profile from "../../assets/images/profile.jpeg"
const ProfileNavBar = (props) => {

  const onClickHandler = (ev) => {
    props.setCurrentPage(ev.target.name)
  }

  return (
    <div className="navbar w-full justify-center mb-14">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-[40px]">Inflowence</Link>
        </div>
          <div className="flex-0">
            <ul className="menu menu-horizontal p-3">
              <li> <button className=" btn-ghost " onClick={onClickHandler} name="Posts calendar">Posts calendar</button> </li>
              <li><button className="btn-ghost" onClick={onClickHandler} name="Campaigns">Campaigns</button></li>
            </ul>
          </div>
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div class="w-10 rounded-full">
                  <img src={profile} alt="Profile pic"/>
                </div>
              </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <button onClick={onClickHandler} name='profile' className="justify-between">
                      Profile
                    </button>
                  </li>
                  <li><a href="/">Logout</a></li>
                </ul>
      </div>
    </div>
 ); 
}

export default ProfileNavBar;