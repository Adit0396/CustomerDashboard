import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="" />
        <span>Company Name Dashboard</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <span>Aditya</span>
        </div>
        <div className="settings">
          <img
            src="/settings.svg"
            alt=""
            className="icon"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="dropdown">
              <div className="dropdown-item">Profile</div>
              <div className="dropdown-item">Logout</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;