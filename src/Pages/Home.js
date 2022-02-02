import React, { useEffect, useState } from "react";
import axios from "axios";
import Balance from "../Components/Balance";
import Footer from "../Components/Footer";
import "../Global/global.css";
import Graphic from "../Components/Graphic";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import TransactionHistory from "../Components/TsHistory";
// import { axiosInstance } from "./API/Axios";

const Home = () => {

  const [user, setUser]= useState()

  useEffect(()=>{
    const token = localStorage.getItem("token")
    const config = {
      headers : {Authorization : `Bearer ${token}`}
    }
    // console.log(userFromLS);
    axios.get(`${process.env.REACT_APP_BACKEND_ZWALLET}/users/profile`, config)
    .then((res) => {
      const result = res.data.data;
      console.log(res.data.data);
      setUser(result);
    })
    .catch((err) => {
      console.log(err);
    });
  },[])
 
  
  return (
    <div className='body'>
      <Navbar/>
      <div className="container d-flex flex-row">
          <Sidebar/>
          <div className="w-100 h-100 d-flex flex-row flex-wrap">
          <Balance telephone={user ? user.telephone : "-"} ballance={user ? user.ballance : 0}/>
          <Graphic/>
          <TransactionHistory/>
         </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
