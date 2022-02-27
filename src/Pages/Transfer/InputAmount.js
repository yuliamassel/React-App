import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button/Index";
import Footer from "../../Components/Footer";
import Input from "../../Components/Input/Input";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";

const InputAmount = () => {
  // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { id } = useParams();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    amount: 0,
    date: new Date(),
    notes: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setForm({ form });
  // };

  const [receiver, setReceiver] = useState({ });

  // console.log("isi dari form transfer",formInput)

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const config = {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    };
    axios
      .get(`${process.env.REACT_APP_BACKEND_ZWALLET}/users/${id}`, config)
      .then((res) => {
        const result = res.data.data;
        // console.log(result);
        localStorage.setItem('receiver', JSON.stringify(result))
        setReceiver(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //   useEffect(() => {
  // let userInfo = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')): {}
  // const config = {
  //   headers: { Authorization: `Bearer ${userInfo.token}` },
  // };
  //   axios
  //     .post(`${process.env.REACT_APP_BACKEND_ZWALLET}/transaction`, form,config)
  //     .then((res) => {
  //       const result = res.data?.data;
  //       console.log("ini source", result);
  //       setForm(result);
  //     })
  //     .catch((err) => {
  //       console.log("ada error", err);
  //     });
  // }, []);

  const handleTransfer = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // const config = {
    //   headers: { Authorization: `Bearer ${userInfo.token}` },
    // };
    if (form.amount > 0) {
      axios
        .post(`${process.env.REACT_APP_BACKEND_ZWALLET}/transaction`,{
          source_id: userInfo.id,
          destination_id: id,
          amount: form.amount,
          date: form.date,
          notes: form.notes,
        })
        .then((res) => {
          const result = res.data.data;
          console.log("ini COMFIRMATION", result);
          localStorage.setItem("transaction", JSON.stringify(result));
          navigate("/Comfirmation");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setErrorMsg("Please input valid amount only!");
    }
  };

  // const handleClick = () => {
  //   localStorage.setItem("tempTransfer", JSON.stringify(form));
  //   navigate("/comfirmation");
  // };

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
              {receiver.username} <br />{" "}
              <p className="desc">{receiver.telephone}</p>
            </h6>
          </div>
          <div className="desc fs-6 fw-normal p-2 ms-3">
            <p>
              Type the amount you want to transfer and then <br />
              press continue to the next steps.
            </p>
          </div>
          <div className="mb-5 transfer">
            <form>
              <Input
                className="input-amount mb-3"
                type="number"
                name="amount"
                placeholder="0.00"
                onChange={handleChange}
                value={form.amount}
              />
              <p className="fw-bold saldo">Rp.120.000 Available</p>
              <img className="icon" src="/images/pen.svg" alt="" />
              <Input
                className="input-notes"
                type="text"
                name="notes"
                placeholder="Add some notes"
                onChange={handleChange}
                value={form.notes}
              />
            </form>
          </div>
          <Button className="btn-small mt-4" onClick={handleTransfer}>
            Continue
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InputAmount;
