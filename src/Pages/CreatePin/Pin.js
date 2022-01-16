import React, { useState } from "react";
import PinInput from "react-pin-input";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Index";

const createPin = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <div className="container-fluid g-0 px-0 col-xl-12 col-lg-12 col-md-12 overflow-hidden">
      <div className="row">
        <div className="col wrapper">
          <h2 className="text-white ms-5 mt-3 fw-bold">Zwallet</h2>
          <img className="position-absolute" src="images/waves.png" alt="" />
          <img
            className="ms-xl-5 ps-5 my-1"
            src="images/handphone.png"
            alt=""
            width="450"
          />
          <h4 className="text-light text-center">
            App that Covering Banking Needs.
          </h4>
          <p className="text-light text-start ps-5 ms-4">
            Zwallet is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in Zwallet everyday with worldwide
            users coverage.
          </p>
        </div>
        <div className="col">
          <h4 className="p-4 fw-bold">
            Secure Your Account, Your Wallet,
            <br />
            and Your Data With 6 Digits PIN <br />
            That You Created Yourself.
          </h4>
          <p className="text ms-4 mb-5">
            Create 6 digits pin to secure all your money and your data in <br />
            Zwallet app. Keep it secret and don’t tell anyone about your <br /> Zwallet
            account password and the PIN.
          </p>
          <PinInput
            length={6}
            initialValue="number"
            secret
            onChange={(value, index) => {}}
            type="number"
            inputMode="number"
            style={{ padding: "3vw" }}
            inputStyle={{ borderColor: "red" }}
            inputFocusStyle={{ borderColor: "blue" }}
            onComplete={(value, index) => {}}
            autoSelect={true}
            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
          <Button
            className="btn w-75 mt-4 ms-4"
            isLoading={loading}
            onClick={handleClick}
          >
            Comfirm
          </Button>
          <p className="ms-4 mt-3 text-decoration-none">
            Dont have an account? Let's <Link to="/signup"> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default createPin;
