import React, { useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Input from "../Components/Input/Input";
import Button from "../Components/Button/Index";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TopUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    amount_topup: null,
    date: new Date()
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleTopUp = (e) => {
    e.preventDefault();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // const config = {
    //   headers: { Authorization: `Bearer ${userInfo.token}` },
    // };

    if (form.amount_topup > 0) {
      // axios
      //   .post(`${process.env.REACT_APP_BACKEND_ZWALLET}/wallet/topup`, {
      //     amount_topup: form.amount_topup
      //   })
      axios({
        method: 'post',
        url: 'http://localhost:2002/wallet/topup',
        data: {
          amount_topup: form.amount_topup
        },
        headers: { Authorization: `Bearer ${userInfo.token}` }
      })
        .then((res) => {
          const result = res.data;
          console.log("ini Top Up", result);
          navigate("/home");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  return (
    <div className="body">
      <Navbar />
      <div className="container ps-5 ms-5  d-flex flex-row">
        <Sidebar />
        <div className="shape big-box mt-4">
          <h5 className="fw-bold p-4">Top Up</h5>
          <p className="ms-4">Minimal pengisian saldo adalah Rp10.000</p>
          <form>
            <Input
              className="input-topup"
              autoFocus
              type="number"
              name="amount_topup"
              placeholder="0.00"
              onChange={handleChange}
              value={form.amount_topup}
            />
          </form>
            <Button className="btn-pay" onClick={handleTopUp}>
              Top Up
            </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TopUp;
