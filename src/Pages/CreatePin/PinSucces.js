import React, { useState } from "react";
import Button from "../../Components/Button/Index";
import { Link } from "react-router-dom";

const PinSucces = () => {
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
            <img className="p-4" src="images/success.png" alt="" />
          <h4 className="p-4 fw-bold">
          Your PIN Was Successfully Created
          </h4>
          <p className="text ms-4 mb-5">
            Your PIN was successfully created and you can now access <br /> all the
            features in Zwallet. Login to your new account and <br /> start exploring!
          </p>
          <Button
            className="btn w-75 mt-4 ms-4"
            isLoading={loading}
            onClick={handleClick}
          >
            Login Now
          </Button>
          <p className="ms-4 mt-3 text-decoration-none">
            Dont have an account? Let's <Link to="/signup"> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PinSucces;
