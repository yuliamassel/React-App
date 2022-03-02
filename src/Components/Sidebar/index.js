import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { pathname } = useLocation();
  const splitLocation = pathname.split("/");

  const navigate = useNavigate()

  const handleLogout= ()=>{
    localStorage.removeItem('userInfo')
    localStorage.removeItem('tempTransfer')
    navigate('/login')
  }

  return (
    <>
      <div className="sidebar shape  mt-4 me-4">
        <ul className="ul">
        <Link to="/home" className="text-decoration-none">
          <li className="list-top">
            <h5 className="fw-bold">
              <img className="changeColor" src="/images/grid.svg" alt="" />{" "}
              Dashboard
            </h5>
          </li>
          </Link>
          <Link to="/search-receiver" className="text-decoration-none"  activeClassName="selected">
          <li className="list-top pe-4">
            <h5 className="fw-bold">
              <img src="/images/arrow-up.svg" alt="" /> Transfer
            </h5>
          </li>
          </Link>
          <li className="list-top pe-4">
            <h5 className="fw-bold">
              <img src="/images/plus.svg" alt="" /> Top Up
            </h5>
          </li>
          <Link to="/Profile" className="text-decoration-none"  activeClassName="selected">
          <li className="list-top pe-4">
            <h5 className="fw-bold">
              <img src="/images/user.svg" alt="" /> Profile
            </h5>
          </li>
          </Link>
          <li className="list-bottom pe-3" onClick={handleLogout}>
            <h5 className="fw-bold">
              <img src="/images/log-out.svg" alt="" /> Logout
            </h5>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
