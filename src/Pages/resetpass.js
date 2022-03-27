import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import * as BsIcons from "react-icons/bs";
import Button from "../Components/Button/Index";
import "../Global/global.css";
import Input from "../Components/Input/Input";
import Image from "./handphone.png";
import { useDispatch, useSelector } from "react-redux";
// import { UserLogin } from "../redux/action/Auth";
// import FullPageLoader from '../Components/PageLoader/Loader'
// import { axiosInstance } from "./API/Axios";

const ResetPass = () => {
  const [form, setFrom] = useState({
    email: "",
  });
  // const config = {
  //   headers : {Authorization : `Bearer ${token}`}
  // }
  const { loading } = useSelector((state) => state.UserLogin);
  // console.log(data);
  // const [Loading, setLoading] = useState(false)
  // const [errorMsg , setErrorMsg]= useState("")
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   let userInfo = localStorage.getItem("userInfo")
  //     ? JSON.parse(localStorage.getItem("userInfo"))
  //     : {};

  const handleChange = (e) => {
    setFrom({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const token = localStorage.setItem('token')

  const FormAddUser = new FormData();
  FormAddUser.append("email", form.email);

  const handleClick = () => {};

  return (
    <div className="container-fluid g-0 px-0 col-xl-12 col-lg-12 col-md-12 overflow-hidden">
      <div className="row">
        <div className="col d-none d-md-none d-lg-block wrapper">
          <h2 className="text-white ms-5 mt-3 fw-bold">Zwallet</h2>
          {/* <img className="position-absolute" src="images/waves.png" alt="" /> */}
          <img className="ms-xl-5 ps-5 mt-3" src={Image} alt="" width="450" />
          <h4 className="text-light text-center">
            App that Covering Banking Needs.
          </h4>
          <p className="text-light text-start ps-5 ms-4">
            Zwallet is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in Zwallet everyday with worldwide
            users coverage.
          </p>
        </div>
        <h2 className="title-mobile pt-5 mb-1 text-center d-block d-md-block d-lg-none ">
          Zwallet
        </h2>
        <div className="col login-mob">
          <h4 className="p-4 fw-bold  d-none d-md-none d-lg-block">
            Did You Forgot Your Password?
            <br />
            Don’t Worry, You Can Reset Your <br />
            Password In a Minutes.
          </h4>
          <p className="text ms-4 mb-5  d-none d-md-none d-lg-block">
            To reset your password, you must type your e-mail and we <br /> will send a
            link to your email and you will be directed to the <br /> reset password
            screens.
          </p>

          <h4 className="d-block mt-3 d-md-block d-lg-none text-center fw-bold">
            Login
          </h4>
          <p className="d-block d-md-block d-lg-none text-center mb-5">
            Login to your existing account to access all the features in
            Zwallet.
          </p>
          {/* <img  src="images/mail.svg" alt="" /> */}
          <BsIcons.BsEnvelope
            className="mail position-absolute ms-3"
            size={25}
          />
          <Input
            className="input-register ms-3 mb-5 "
            name="email"
            onChange={handleChange}
            value={form.email}
            type="email"
            placeholder="Enter your e-mail"
          />
          {/* {errorMsg && <p className="text-danger">{errorMsg}</p>} */}
          {/* {errorMsg && <p className="text-danger">{errorMsg}</p>} */}
          <Button
            className="btn w-75 mt-4 ms-5"
            isLoading={loading}
            onClick={handleClick}
          >
            Confirm
          </Button>
        </div>
      </div>
      {/* <FullPageLoader/> */}
    </div>
  );
};

export default ResetPass;
