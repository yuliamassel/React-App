import React, {useEffect, useState} from "react";
// import { axiosInstance } from "./API/Axios";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button/Index";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import socket from '../Helper/socket'

const Comfirmation = () => {

  // const [transfer, setTransfer] = useState({});
  const dataTransfer = JSON.parse(localStorage.getItem('transaction'));
    // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const receiver = JSON.parse(localStorage.getItem('receiver'));
    // console.log(dataTransfer.insertId, "Ini data transfer");
    // const [notif, setNotif] = useState()
    

    const [comfirm, setComfirm] = useState([])


    useEffect(()=>{
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const config = {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      };
      axios.get(`${process.env.REACT_APP_BACKEND_ZWALLET}/users/${userInfo.id}`,config)
      .then((res)=>{
          const resultBallance = res.data?.data
          // console.log("BALLANCE", resultBallance);
          setComfirm(resultBallance)
      })
      .catch((err)=>{
          console.log(err);
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(()=>{
    // console.log(socket.rooms, 'socket');
    socket.on('Continue', (data)=>{
      console.log(data,"INI SOCKET");
      // setNotif(notif.concat({message: `Kamu Menerima ${dataTransfer.amount} dari ${comfirm.username}`}))
      // setNotif(notif.concat({message: data.message}))
    })
  })


  
  
  
  const navigate = useNavigate();
  const handleClick = () =>{
    // localStorage.removeItem('transaction')
    localStorage.removeItem('receiver')
    localStorage.removeItem('transaction')
    localStorage.removeItem('comfirmation')
    // socket.emit('Transfer', {sender: comfirm.id, reaceiver: receiver.id, amount: dataTransfer.amount})
    navigate('/home')
  }
  return (
    <div className="body">
      <Navbar />
      <div className="container ps-5 ms-5  d-flex flex-row">
        <Sidebar />
        <div className="shape big-box mt-4">
          <h5 className="p-2 fw-bold">Transfer To</h5>
          <div className="search-user ms-4 mt-4">
            <img
              className="ms-2 me-3"
              width="50"
              src="images/samuel.svg"
              alt=""
            />
            <h6 className="fw-bold mt-3">
              {receiver.username} <br /> <p className="desc">{receiver.telephone}</p>
            </h6>
          </div>
          <h5 className="p-4 fs-6 fw-bold">Details</h5>
          <div className="detail">
            <div className="search-user ms-4 mb-3">
              <p className="ms-3 mt-2">
                Amount <br />
                <h5 className="fw-bold fs-6">{dataTransfer.amount}</h5>
              </p>
            </div>
            <div className="search-user ms-4 mb-3">
              <p className="ms-3 mt-2">
                Balance Left <br />
                <h5 className="fw-bold fs-6">{comfirm.balance}</h5>
              </p>
            </div>
            <div className="search-user ms-4 mb-3">
              <p className="ms-3 mt-2 ">
                Date & Time <br />
                <h5 className="fw-bold fs-6">{dataTransfer.created_at}</h5>
              </p>
            </div>
            <div className="search-user ms-4 mb-3">
              <p className="ms-3 mt-2 ">
                Notes <br />
                <h5 className="fw-bold fs-6">{dataTransfer.notes}</h5>
              </p>
            </div>
          </div>
          <div className="action-confirm">
            <Button className="btn-small2 my-5" onClick={handleClick}>Continue</Button>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Comfirmation;
