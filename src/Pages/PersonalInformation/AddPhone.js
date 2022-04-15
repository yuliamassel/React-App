import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Button from "../../Components/Button/Index";
import Input from "../../Components/Input/Input";
import axios from "axios";

const AddPhone = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    telephone: null,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const AddPhoneNumber = (e) => {
    e.preventDefault();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (form.telephone > 0) {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_BACKEND_ZWALLET}/users/profile/telephone`,
        data: {
          telephone: form.telephone,
        },
        headers: { Authorization: `Bearer ${userInfo.token}` },
      })
        .then((res) => {
          const result = res.data;
          console.log("ini Add Telephone", result);
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
          <h5 className="fw-bold p-3">Add Phone Number</h5>
          <p className="desc fw-normal fs-6 ms-3">
            Add at least one phone number for the transfer <br /> ID so you can
            start transfering your money to <br /> another user.
          </p>
          <div>
            <BsIcons.BsTelephone className="icon-phone" size={22} />
            <Input
              autoFocus
              type="number"
              name="telephone"
              className="input-AddPhone my-5"
              placeholder="Enter Your Phone Number"
              onChange={handleChange}
              value={form.telephone}
            />
          </div>
          <Button className="btn w-50 exphanse me-5" onClick={AddPhoneNumber}>Add Phone Number</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddPhone;
