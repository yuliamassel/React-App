import React from "react";
import { Link, useNavigate } from "react-router-dom";
import PinInput from "react-pin-input";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Button from "../../Components/Button/Index";

const ChangePin = () => {

  const navigate = useNavigate()

  const handleClick=()=>{
    navigate("/New-PIN")
  }

  return (
    <div className="body">
      <Navbar />
      <div className="container ps-5 ms-5  d-flex flex-row">
        <Sidebar />
        <div className="shape big-box mt-4">
          <h5 className="fw-bold p-3">Change PIN</h5>
          <p className="desc fw-normal fs-6 ms-3">
            Enter your current 6 digits Zwallet PIN below to <br /> continue to
            the next steps.
          </p>
          <PinInput
            className="pincode-input-text"
            length={6}
            initialValue="number"
            secret
            onChange={(value, index) => {}}
            type="number"
            inputMode="number"
            style={{ padding: "5vw"}}
            // inputStyle={{ borderColor: "#aaa" }}
            inputFocusStyle={{ borderColor: "#6379f4" }}
            onComplete={(value, index) => {}}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
        <Button className="btn w-50 exphanse me-5" onClick={handleClick}>Continue</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChangePin;
