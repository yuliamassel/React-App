import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import * as BsIcons from "react-icons/bs";
import Button from "../Components/Button/Index";
import "../Global/global.css";
import Input from "../Components/Input/Input";
import Image from "./handphone.png";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin } from "../redux/action/Auth";
// import FullPageLoader from '../Components/PageLoader/Loader'
// import { axiosInstance } from "./API/Axios";

const Login = () => {
  const [form, setFrom] = useState({
    email: "",
    password: "",
  });
  // const config = {
  //   headers : {Authorization : `Bearer ${token}`}
  // }
  const { loading } = useSelector((state) => state.UserLogin);
  // console.log(data);
  // const [Loading, setLoading] = useState(false)
  // const [errorMsg , setErrorMsg]= useState("")
  // const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let userInfo = localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : {};

  const handleChange = (e) => {
    setFrom({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // const token = localStorage.setItem('token')

  const FormAddUser = new FormData();
  FormAddUser.append("email", form.email);
  FormAddUser.append("password", form.password);

  useEffect(() => {
    if (userInfo.token !== undefined) {
      navigate("/home");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const handleClick = () => {
    // setLoading(true)
    dispatch(
      UserLogin({
        form,
      })
    );
    navigate("/home");
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  return (
    <div className="container2">
    <div className="col-6 d-none d-md-none d-lg-block wrapper">
      <h2 className="text-white ms-5 mt-3 fw-bold">Zwallet</h2>
      {/* <img className="position-absolute" src="images/waves.png" alt="" /> */}
      <div className="d-flex flex-column justify-content-center align-items-center">
     <img className="phone mb-0" src={Image} alt="" width="450" />
     <h4 className="txt-phone">
       App that Covering Banking Needs.
     </h4>
     <p className="txt-desc">
       Zwallet is an application that focussing in banking needs for all
       users <br /> in the world. Always updated and always following world trends. <br />
       5000+ users registered in Zwallet everyday with worldwide <br /> users
       coverage.
     </p>
      </div>
    </div>
    <div className="col-12 col-lg-6 login-mob">
    <h2 className="title-mobile text-center d-block d-md-block d-lg-none ">
      Zwallet
    </h2>
      <h4 className="p-4 fw-bold  d-none d-md-none d-lg-block">
        Start Accessing Banking Needs <br />
        With All Devices and All Platforms <br />
        With 30.000+ Users
      </h4>
      <p className="text ms-4 mb-5  d-none d-md-none d-lg-block">
        Transfering money is eassier than ever, you can access <br />
        Zwallet wherever you are. Desktop, laptop, mobile phone? <br />
        we cover all of that for you!
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
      <div>
        {/* <img  src="images/lock.svg" alt="" /> */}
        <BsIcons.BsFillLockFill
          className="lock position-absolute ms-3"
          size={25}
        />
        <Input
          className="input-register ms-3 mb-5"
          type={showPassword ? "text" : "password"}
          name="password"
          onChange={handleChange}
          value={form.password}
          placeholder="Enter your password"
        />
        {showPassword ? (
          <BsIcons.BsEye
            onClick={handleShowPassword}
            className="form-icons bi-eye-slash position-absolute"
            size={22}
          />
        ) : (
          <BsIcons.BsEyeSlash
            onClick={handleShowPassword}
            className="form-icons bi-eye-slash position-absolute"
            size={22}
          />
        )}
        {/* <div className="forgot d-none d-lg-block"> */}
        <p className="pf">
        <Link to='/Reset-Password' className="text text-decoration-none text-secondary">
          Forgot Password ?
          </Link>
        </p>
        {/* </div> */}
      </div>
      {/* {errorMsg && <p className="text-danger">{errorMsg}</p>} */}
      <Button
        className="btn w-75 mt-4 ms-5"
        isLoading={loading}
        onClick={handleClick} disabled={!form.email || !form.password}
      >
        Login
      </Button>
      <p className="ms-5 mt-3 text-decoration-none">
        Dont have an account? Let's{" "}
        <Link
          to="/signup"
          className="text text-decoration-none text-primary"
        >
          {" "}
          Sign Up
        </Link>
      </p>
    </div>
  </div>
  );
};

export default Login;



    // <div className='container'>
    //   <div className='section-right'>
    //   <h2 className="title-app mt-4">Zwallet</h2>
    //   <div className="d-flex flex-column justify-content-center align-items-center">
    //     <img className="phone mt-4" src={Image} alt="" width="450" />
    //     <h4 className="txt-phone">
    //       App that Covering Banking Needs.
    //     </h4>
    //     <p className="txt-desc">
    //       Zwallet is an application that focussing in banking needs for all
    //       users <br /> in the world. Always updated and always following world trends. <br />
    //       5000+ users registered in Zwallet everyday with worldwide <br /> users
    //       coverage.
    //     </p>
    //     </div>
    //   </div>
    //   <div className="left-section">
    //   <h4 className="txt-left d-none d-md-none d-lg-block">
    //   Start Accessing Banking Needs <br />
    //   With All Devices and All Platforms <br />
    //   With 30.000+ Users
    // </h4>
    // <p className="text d-none d-md-none d-lg-block">
    //   Transfering money is eassier than ever, you can access <br />
    //   Zwallet wherever you are. Desktop, laptop, mobile phone? <br />
    //   we cover all of that for you!
    // </p>

    // <h4 className="d-block mt-3 d-md-block d-lg-none text-center fw-bold">
    //   Login
    // </h4>
    // <p className="d-block d-md-block d-lg-none text-center mb-5">
    //   Login to your existing account to access all the features in
    //   Zwallet.
    // </p>
    // {/* <img  src="images/mail.svg" alt="" /> */}
    // <BsIcons.BsEnvelope
    //   className="mail position-absolute ms-3"
    //   size={25}
    // />
    // <Input
    //   className="input-register ms-3 mb-5 "
    //   name="email"
    //   onChange={handleChange}
    //   value={form.email}
    //   type="email"
    //   placeholder="Enter your e-mail"
    // />
    // {/* {errorMsg && <p className="text-danger">{errorMsg}</p>} */}
    // <div>
    //   {/* <img  src="images/lock.svg" alt="" /> */}
    //   <BsIcons.BsFillLockFill
    //     className="lock position-absolute ms-3"
    //     size={25}
    //   />
    //   <Input
    //     className="input-register ms-3 mb-5"
    //     type={showPassword ? "text" : "password"}
    //     name="password"
    //     onChange={handleChange}
    //     value={form.password}
    //     placeholder="Enter your password"
    //   />
    //   {showPassword ? (
    //     <BsIcons.BsEye
    //       onClick={handleShowPassword}
    //       className="form-icons bi-eye-slash position-absolute"
    //       size={22}
    //     />
    //   ) : (
    //     <BsIcons.BsEyeSlash
    //       onClick={handleShowPassword}
    //       className="form-icons bi-eye-slash position-absolute"
    //       size={22}
    //     />
    //   )}
    //   {/* <div className="forgot d-none d-lg-block"> */}
    //   <p className="pf">
    //   <Link to='/Reset-Password' className="text text-decoration-none text-secondary">
    //     Forgot Password ?
    //     </Link>
    //   </p>
    //   {/* </div> */}
    // </div>
    // {/* {errorMsg && <p className="text-danger">{errorMsg}</p>} */}
    // <Button
    //   className="btn w-75 mt-4 ms-5"
    //   isLoading={loading}
    //   onClick={handleClick}
    // >
    //   Login
    // </Button>
    // <p className="ms-5 mt-3 text-decoration-none">
    //   Dont have an account? Let's{" "}
    //   <Link
    //     to="/signup"
    //     className="text text-decoration-none text-primary"
    //   >
    //     {" "}
    //     Sign Up
    //   </Link>
    // </p>
    //   </div>
    // </div>