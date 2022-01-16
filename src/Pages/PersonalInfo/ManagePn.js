import React from 'react'
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Button from '../../Components/Button/Index';

const ManagePn = () => {
    return (
        <div className="body">
        <Navbar />
        <div className="container d-flex flex-row">
          <Sidebar />
          <div className="shape big-box mt-4">
            <h5 className="fw-bold p-3">Manage Phone Number</h5>
            <p className="desc fw-normal fs-6 ms-3">
            You can only delete the phone number and then <br /> you must add another phone number.
            </p>
            <div className="search-user ms-4 mt-4 p-2 d-flex justify-content-between">
                <p className='ms-2'>Primary <br /><h5 className='fw-bold position-absolute'>+62129302434</h5></p>
                <img className='mt-2 me-3' src="/images/trash.png" alt="" width={30} height={30}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
}

export default ManagePn
