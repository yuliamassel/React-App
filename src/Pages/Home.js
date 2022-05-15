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
import Button from "../Components/Button/Index";
import { useNavigate } from "react-router-dom";
// import { axiosInstance } from "./API/Axios";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, loading, error } = useSelector((state) => state.GetUser);
  console.log(data, "data di HOME");

  useEffect(() => {
    dispatch(GetUser());
  }, [dispatch]);

  const handleClick = () => {
    navigate("/search-receiver");
  };

  return (
    <div className="body col-12 col-lg-12">
      <Navbar className="navbar Nav"/>
      {/* <nav className="navbar Nav ">
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
          </div>
        </div>
      </nav> */}
      <div className="container ps-lg-5 ms-lg-5 d-flex flex-row">
        <Sidebar />
        <div className="w-100 h-100 d-flex flex-row flex-wrap">
          {openModal && <Modal closeModal={setOpenModal} />}
          <Balance
            telephone={data ? data.telephone : "-"}
            ballance={data ? data.balance : 0}
          />
          <div className="d-flex flex-row d-block d-md-block d-lg-none my-4">
            <Button className="btn-balancemob me-3" onClick={handleClick}>
              <img src="/images/arrow-grey.png" alt="" /> Transfer
            </Button>
            <Button className="btn-balancemob ">
              <img src="/images/plus-grey.png" alt="" /> Top Up
            </Button>
          </div>
          <Graphic
            income={data ? data.income : 0}
            expense={data ? data.expense : 0}
          />
          <TransactionHistory />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
