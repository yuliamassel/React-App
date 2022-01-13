import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import Button from "../Components/Button/Index";
import "../Components/Global/global.css";
import Input from "../Components/Input/Input";
import Image from "./handphone.png";


const SignUp = () => {

  const [form, setForm] = useState({
    username: '',
    email: '',
    password:''
  })
  const navigate = useNavigate()

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    axios.post('https://zwallet-massel.herokuapp.com/users/register', form)
    .then((res)=>{
      const result = res.data.data
      localStorage.setItem('auth', "1")
      localStorage.setItem('user', JSON.stringify(result))
      navigate('/login')
    })
    .catch((err)=>{
      console.log(err.response);
    })
  }


  return (
    <div className="container-fluid g-0 px-0 col-xl-12 col-lg-12 col-md-12 overflow-hidden">
      <div className="row">
        <div className="col wrapper">
          <h2 className="text-white fw-bold ms-5 mt-3">Zwallet</h2>
          <img className="position-absolute" src="images/waves.png" alt="" />
          <img className="ms-5 ps-5 my-1" src={Image} alt="" width="450" />
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
          <form onSubmit={handleSubmit}>
            <img className="position-absolute ms-4" src="images/person.svg" alt="" />
          <Input
            className="input-register ms-3 mb-5"
            type="text"
            name="username"
            onChange={handleChange}
            value={form.username}
            placeholder="Enter your username"
          />
          <div>
          <img className="position-absolute ms-4" src="images/mail.svg" alt="" />
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
          <img className="position-absolute ms-4" src="images/lock.svg" alt="" />
          <Input
            className="input-register ms-3 mb-5"
            type="password"
            name="password"
            onChange={handleChange}
            value={form.password}
            placeholder="Create your password"
          />
          </div>
          <Button className="btn mt-4 ms-4" type="submit">SignUp</Button>
          <p className="ms-4 mt-3">
              Already have an account? Let’s
              <Link to="/login"> Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
