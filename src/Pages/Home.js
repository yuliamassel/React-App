import React, { useEffect, useState } from "react";
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
import Modal from "../Components/Modal";
import { BiBell } from "react-icons/bi";
// import { axiosInstance } from "./API/Axios";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state) => state.GetUser);
  console.log(data, "data di HOME");

  useEffect(() => {
    dispatch(GetUser());
  }, [dispatch]);

  return (
    <div className="body">
      <nav className="navbar Nav ">
        <div className="container">
          <h2 className="title">Zwallet</h2>
          <img
            src={data.photo ? data.photo : "/images/Bobi.png"}
            alt=""
            width="45"
            height="45"
            className="skip"
          />
          <div>
            <p className="h fw-bold">{data ? data.username : ""} </p>
            <span>{data ? data.telephone : "-"}</span>
            <BiBell
              size={30}
              className="icon-button"
              onClick={() => {
                setOpenModal(true);
              }}
            />
            {/* <Modal/> */}
          </div>
        </div>
      </nav>
      <div className="container ps-5 ms-5 d-flex flex-row">
        <Sidebar />
        <div className="w-100 h-100 d-flex flex-row flex-wrap">
          {openModal && <Modal closeModal={setOpenModal} />}
          <Balance
            telephone={data ? data.telephone : "-"}
            ballance={data ? data.ballance : 0}
          />
          <Graphic />
          <TransactionHistory />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
