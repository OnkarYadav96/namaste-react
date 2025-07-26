import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/logo";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { counter } from "./Counter";
const Header = () => {
  const [btnName, setBtn] = useState("Login");
  const onlineStatus=useOnlineStatus();
  const logeedUserInfo=useContext(UserContext);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          {/* <Link> component can't reload the entire page,its only add the loaded path component */}
          <li>Online status: {onlineStatus?"✅":"🔴"}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/about">About Us</Link> </li>
          <li><Link to="/grocery">Grocery</Link> </li>
          <button
            className="login-btn"
            onClick={() => {
              btnName==="Login"?setBtn("Logout"):setBtn("Login");
            }}
          >
            {btnName}
          </button>
          <li>{logeedUserInfo.loggedInUser} </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
