import React, { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import Button from "../Components/Button/Index";
import "../Components/Global/global.css";
import Input from "../Components/Input/Input";
import Image from "./handphone.png";


const Login = () => {
  const [form, setFrom] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false)
  const [errorMsg , setErrorMsg]= useState("")
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFrom({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(()=>{

  })

  const handleClick = () =>{
    setLoading(true)
    axios.post('https://zwallet-massel.herokuapp.com/users/login', form)
    .then((res)=>{
      setLoading(false)
      const result = res.data.data
      console.log(result);
      localStorage.setItem('auth', "1")
      localStorage.setItem('user', JSON.stringify(result))
      navigate('/home')
    })
    .catch((err)=>{
      setLoading(false)
      console.log(err.response);
      if(err.response.status === 403){
        setErrorMsg(err.response.data.message)
    }else{
        setErrorMsg('internal server error')
    }
    })
  }

  return (
    <div className="container-fluid g-0 px-0 col-xl-12 col-lg-12 col-md-12 overflow-hidden">
      <div className="row">
        <div className="col wrapper">
          <h2 className="text-white ms-5 mt-3 fw-bold">Zwallet</h2>
          <img className="position-absolute" src="images/waves.png" alt="" />
          <img className="ms-xl-5 ps-5 my-1" src={Image} alt="" width="450" />
          <h4 className="text-light text-center">
            App that Covering Banking Needs.
          </h4>
          <p className="text-light text-start ps-5 ms-4">
            Zwallet is an application that focussing in banking needs for all
            users
            in the world. Always updated and always following world trends.
       
            5000+ users registered in Zwallet everyday with worldwide
            users coverage.
          </p>
        </div>
        <div className="col">
          <h4 className="p-4 fw-bold">
            Start Accessing Banking Needs <br />
            With All Devices and All Platforms <br />
            With 30.000+ Users
          </h4>
          <p className="text ms-4 mb-5">
            Transfering money is eassier than ever, you can access <br />
            Zwallet wherever you are. Desktop, laptop, mobile phone? <br />
            we cover all of that for you!
          </p>
          <img className="position-absolute ms-3" src="images/mail.svg" alt="" />
          <Input
            className="input-register ms-3 mb-5"
            name="email"
            onChange={handleChange}
            value={form.email}
            type="email"
            placeholder="Enter your e-mail"
          />
          {errorMsg && <p className="text-danger">{errorMsg}</p>}
          <div>
          <img className="position-absolute ms-3" src="images/lock.svg" alt="" />
          <Input
            className="input-register ms-3 mb-5"
            type="password"
            name="password"
            onChange={handleChange}
            value={form.password}
            placeholder="Enter your password"
          />
          </div>
          {/* {errorMsg && <p className="text-danger">{errorMsg}</p>} */}
          <Button className="btn w-75 mt-4 ms-4" isLoading={loading} onClick={handleClick}>Login</Button>
          <p className="ms-4 mt-3 text-decoration-none">Dont have an account? Let's <Link to="/signup"> Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
