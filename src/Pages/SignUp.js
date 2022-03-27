import React, {useState, useEffect} from "react";
import {Link, useNavigate} from 'react-router-dom'
// import axios from 'axios'
import * as BsIcons from "react-icons/bs";
import Button from "../Components/Button/Index";
import "../Global/global.css";
import Input from "../Components/Input/Input";
import Image from "./handphone.png";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../redux/action/Auth";
import socket from '../Helper/socket'


const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password:''
  })

  const FormAddUser = new FormData()
  FormAddUser.append('username', form.username)
  FormAddUser.append('email', form.email)
  FormAddUser.append('password', form.password)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  useEffect(()=>{
    socket.on('message for new user',(message)=>{
      console.log(message);
    })
  },[])

  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(RegisterUser({form}))
    navigate('/login', {replace: true})
  }

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };


  return (
    <div className="container-fluid g-0 px-0 col-xl-12 col-lg-12 col-md-12 overflow-hidden">
      <div className="row">
        <div className="col  d-none d-md-none d-lg-block wrapper">
          <h2 className="text-white fw-bold ms-5 mt-3">Zwallet</h2>
          <img className="position-absolute" src="images/waves.png" alt="" />
          <img className="ms-5 ps-5 mt-5" src={Image} alt="" width="450" />
          <h4 className="text-light text-center">
            App that Covering Banking Needs.
          </h4>
          <p className="text-light text-start ms-5">
            Zwallet is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in Zwallet everyday with worldwide
            users coverage.
          </p>
        </div>
        <h2 className="title-mobile pt-5 mb-1 text-center d-block d-md-block d-lg-none ">Zwallet</h2>
        <div className="col login-mob">
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
          <h4 className="d-block mt-3 d-md-block d-lg-none text-center fw-bold">Sign Up</h4>
          <p className="d-block d-md-block d-lg-none text-center mb-5">Login to your existing account to access
            all the features in Zwallet.</p>
          <form onSubmit={handleSubmit}>
            <img className="position-absolute ms-3" src="images/person.svg" alt="" />
          <Input
            className="input-register ms-3 mb-5"
            type="text"
            name="username"
            onChange={handleChange}
            value={form.username}
            placeholder="Enter your username"
          />
          <div>
          <BsIcons.BsEnvelope
            className="mail position-absolute ms-3"
            size={25}
          />
          <Input
            className="input-register ms-3 mb-5"
            type="email"
            name="email"
            onChange={handleChange}
            value={form.email}
            placeholder="Enter your e-mail"
          />
          </div>
          <div>
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
            placeholder="Create your password"
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
          <p className="pf">
            <Link to='/Reset-Password' className="text text-decoration-none text-secondary">
              Forgot Password ?
              </Link>
            </p>
          </div>
          <Button className="btn mt-4 ms-4" type="submit">SignUp</Button>
          <p className="ms-4 mt-3">
              Already have an account? Let’s
              <Link to="/login" className="text text-decoration-none text-primary"> Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
