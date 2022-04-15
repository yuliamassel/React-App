// import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Index";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { GetUser } from "../../redux/action/users";

const PersonalInfo = () => {

  // const [user, setUser]= useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {data} = useSelector((state)=> state.GetUser)

  useEffect(()=>{
    dispatch(GetUser())
  },[dispatch])

  const handleClick = () =>{
    if (data.telephone === null) {
      navigate("/Add-Phone-Number")
    } else{
      navigate("/Manage-Phone-Number")
    }
  }

  return (
    <div className="body">
      <Navbar />
      <div className="container ps-5 ms-5  d-flex flex-row">
        <Sidebar />
        <div className="shape big-box mt-4">
          <h5 className="fw-bold p-4">Personal Information</h5>
          <p  className="desc fs-6 fw-normal p-2 ms-3">
            We got your personal information from the sign <br /> up proccess. If you
            want to make changes on <br /> your information, contact our support.
          </p>
          <div className="detail">
          <div className="search-user ms-4 mb-3">
              <p className="ms-3 mt-2">Username <br /><h5 className="fw-bold fs-6">{data ? data.username : ""}</h5></p>            
          </div>
          <div className="search-user ms-4 mb-3">
              <p className="ms-3 mt-2 ">Verified E-mail<br /><h5 className="fw-bold fs-6">{data ?data.email : "-"}</h5></p>            
          </div>
          <div className="search-user d-flex justify-content-between ms-4 mb-3">
              <p className="ms-3 mt-2 ">Phone Number <br /><h5 className="fw-bold fs-6">{data.telephone ? data.telephone : "-"}</h5></p>    
              <Button onClick={handleClick} className="btn-manage mt-2 me-5">Manage</Button>        
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PersonalInfo;
