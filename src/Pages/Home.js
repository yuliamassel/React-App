import React from "react";
import Balance from "../Components/Balance";
import Footer from "../Components/Footer";
import "../Components/Global/global.css";
import Graphic from "../Components/Graphic";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import TransactionHistory from "../Components/TsHistory";

const Home = () => {
  return (
    <div className='body'>
      <Navbar/>
      <div className="container d-flex flex-row">
          <Sidebar/>
          <div className="w-100 h-100 d-flex flex-row flex-wrap">
          <Balance/>
          <Graphic/>
          <TransactionHistory/>
         </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
