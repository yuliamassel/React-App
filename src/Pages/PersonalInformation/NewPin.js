import React from "react";
import { Link } from "react-router-dom";
import PinInput from "react-pin-input";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import Button from "../../Components/Button/Index";

const NewPin = () => {
  return (
    <div className="body">
      <Navbar />
      <div className="container d-flex flex-row">
        <Sidebar />
        <div className="shape big-box mt-4">
          <h5 className="fw-bold p-3">Change PIN</h5>
          <p className="desc fw-normal fs-6 ms-3">
          Type your new 6 digits security PIN to use in <br /> Zwallet.
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
        <Button className="btn w-50 exphanse me-5">Change PIN</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewPin;
