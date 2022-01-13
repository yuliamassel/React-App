import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button/Index";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Comfirmation = () => {
  const navigate = useNavigate()
  return (


    <div className="body">
      <Navbar />
      <div className="container d-flex flex-row">
        <Sidebar />
        <div className="shape big-box mt-4">
          <h5 className="p-2 fw-bold">Transfer To</h5>
          <div className="search-user ms-4 mt-4">
            <img
              className="ms-2 me-3"
              width="50"
              src="images/samuel.svg"
              alt=""
            />
            <h6 className="fw-bold mt-3">
              Samuel Suhi <br /> <p className="desc">+62789564234</p>
            </h6>
          </div>
          <h5 className="p-4 fs-6 fw-bold">Details</h5>
          <div className="detail">
          <div className="search-user ms-4 mb-3">
              <p className="ms-3 mt-2">Amount <br /><h5 className="fw-bold fs-6">Rp.100.000</h5></p>            
          </div>
          <div className="search-user ms-4 mb-3">
              <p className="ms-3 mt-2">Balance Left <br /><h5 className="fw-bold fs-6">Rp.20.000</h5></p>            
          </div>
          <div className="search-user ms-4 mb-3">
              <p className="ms-3 mt-2 ">Date & Time <br /><h5 className="fw-bold fs-6">-</h5></p>            
          </div>
          <div className="search-user ms-4 mb-3">
              <p className="ms-3 mt-2 ">Notes <br /><h5 className="fw-bold fs-6">For Buying Some Socks</h5></p>            
          </div>
          <Button className="btn-small my-5" onClick={navigate("/Modal")}>Continue</Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Comfirmation;
