import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { useLocation } from "react-router";
import * as BsIcons from "react-icons/fi";
import Button from "../Button/Index";
import Modal from "../Modal";

const Sidebar = () => {
  // const location = useLocation();
  // const { pathname } = location;
  // const splitLocation = pathname.split("/");
  const [openModal, setOpenModal]= useState()


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
          <li className="list-top">
        <NavLink activeClassName="active" to="/home" className="text-decoration-none text-secondary">
            <h5 className="fw-bold ms-5 mt-2">
            <BsIcons.FiGrid className="me-2" size={28}/>
              Dashboard
            </h5>
          </NavLink>
          </li>
          <li className="list-top pe-4">
          <NavLink activeClassName="active" to="/search-receiver" className="text-decoration-none text-secondary">
            <h5 className="fw-bold ms-5">
              <BsIcons.FiArrowUp className="me-2" size={28}/>Transfer
            </h5>
          </NavLink>
          </li>
          <li className="list-top pe-4">
            <h5 className="fw-bold ms-5">
            <BsIcons.FiPlus className="me-2" size={28}/> Top Up
            </h5>
          </li>
          <li className="list-top pe-4">
          <NavLink activeClassName="active" to="/Profile"  className="text-decoration-none text-secondary"  >
            <h5 className="fw-bold ms-5">
               <BsIcons.FiUser className="me-2" size={28}/>Profile
            </h5>
          </NavLink>
          </li>
          <li className="list-bottom pe-4" activeClassName='active' onClick={()=>{setOpenModal(true)}}>
            <h5 className="fw-bold ms-2">
              <BsIcons.FiLogOut className="me-2" size={28}/> Logout
            </h5>
          </li>
          {openModal &&  <Modal className='d-flex flex-column' closeModal={setOpenModal}>
            <p>Are You Sure to LogOut your Account</p>
              <Button  onClick={handleLogout} className="btn-accept me-3">Accept</Button>
              <Button onClick={()=>{setOpenModal(false)}} className="btn-cancel">Cancel</Button>
            </Modal>}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
