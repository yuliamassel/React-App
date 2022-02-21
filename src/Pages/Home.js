import React, { useEffect } from "react";
// import axios from "axios";
import Balance from "../Components/Balance";
import Footer from "../Components/Footer";
import "../Global/global.css";
import Graphic from "../Components/Graphic";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import TransactionHistory from "../Components/TsHistory";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GetUser } from "../redux/action/users";
// import { axiosInstance } from "./API/Axios";

const Home = () => {

  // const [user, setUser]= useState()
  const dispatch = useDispatch()

  const { data, loading, error } = useSelector((state) => state.GetUser)

  useEffect(()=>{
    dispatch(GetUser())
  },[dispatch]);
  
  return (
    <div className='body'>
      <Navbar/>
      <div className="container d-flex flex-row">
          <Sidebar/>
          <div className="w-100 h-100 d-flex flex-row flex-wrap">
          <Balance telephone={data ? data.telephone : "-"} ballance={data ? data.ballance : 0}/>
          <Graphic/>
          <TransactionHistory/>
         </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
