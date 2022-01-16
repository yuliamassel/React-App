import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";

const PersonalInfo = () => {
  return (
    <div className="body">
      <Navbar />
      <div className="container d-flex flex-row">
        <Sidebar />
        <div className="shape big-box mt-4">
          <h5 className="fw-bold p-4">Personal Information</h5>
          <p  className="desc fs-6 fw-normal p-2 ms-3">
            We got your personal information from the sign <br /> up proccess. If you
            want to make changes on <br /> your information, contact our support.
          </p>
          <div className="detail">
          <div className="search-user ms-4 mb-3">
              <p className="ms-3 mt-2">First Name <br /><h5 className="fw-bold fs-6">Christine</h5></p>            
          </div>
          <div className="search-user ms-4 mb-3">
              <p className="ms-3 mt-2">Last Name <br /><h5 className="fw-bold fs-6">Aguilera</h5></p>            
          </div>
          <div className="search-user ms-4 mb-3">
              <p className="ms-3 mt-2 ">Verified E-mail<br /><h5 className="fw-bold fs-6">Aguilera@gmail.com</h5></p>            
          </div>
          <div className="search-user d-flex justify-content-between ms-4 mb-3">
              <p className="ms-3 mt-2 ">Phone Number <br /><h5 className="fw-bold fs-6">+62 874-098-233</h5></p>    
              <Link to="" className="text-decoration-none mt-4 me-5">Manage</Link>        
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PersonalInfo;
