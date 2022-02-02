import React, {useEffect, useState} from "react";
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button/Index";
import Footer from "../../Components/Footer";
import Input from "../../Components/Input/Input";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";

const InputAmount = () => {

  const {id} = useParams()
  const userFromLS = JSON.parse(localStorage.getItem("user"))
  const navigate = useNavigate()
  // const [detailTransfer, setDetailTransfer] = useState({})
  const [ballance, setBallance] = useState([])

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_BACKEND_ZWALLET}/users/${userFromLS}`)
    .then((res)=>{
      const result = res.data[1].ballance
      setBallance(result);
    })
  })
  

  const handleClick = () =>{
    navigate('/input-filled')
  }

  return (
    <div className="body">
      <Navbar />
      <div className="container d-flex flex-row">
        <Sidebar />
        <div className="shape big-box mt-4">
          <h5 className="fw-bold p-2">Transfer Money</h5>
          <div className="search-user ms-4 mt-4">
            <img
              className="ms-2 me-3"
              width="50"
              src="http://localhost:3000/images/samuel.svg"
              alt=""
            />
            <h6 className="fw-bold mt-3">
              Samuel Suhi <br /> <p className="desc">+62789564234</p>
            </h6>
          </div>
          <div className="desc fs-6 fw-normal p-2 ms-3">
          <p>
            Type the amount you want to transfer and then <br />
            press continue to the next steps.
          </p>
          </div>
          <div className="mb-5 transfer">
            <Input 
            className="input-amount mb-3"
            type="number"
            name="amount"
            placeholder="0.00"
            />
            <p className="fw-bold">Rp.120.000 Available</p>
            <form>
              <img className="icon" src="/images/pen.svg" alt="" />
            <Input
            className="input-notes"
            type="text"
            name="notes"
            placeholder="Add some notes"
            />
            </form>
          </div>
          <Button className="btn-small mt-4" onClick={handleClick} >Continue</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InputAmount;
