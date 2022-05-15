import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Index";

const Balance = ({telephone, ballance}) => {

  const navigate = useNavigate()

  const handleClick = () =>{
    navigate("/search-receiver")
  }



  return (
    <>
      <div className="balance shape-blue mt-4">
        <div className="text-white p-3">
          <p>Balance</p>
          <h4 className="fw-bold">Rp.{ballance}</h4>
          <span>{telephone}</span>
        </div>
        <div className="d-flex flex-column d-none d-md-none d-lg-block p-3 ">
          <Button className="btn-balance mb-2" onClick={handleClick}><img src="/images/arrow-grey.png" alt="" /> Transfer</Button>
          <Button className="btn-balance"><img src="/images/plus-grey.png" alt="" /> Top Up</Button>
        </div>
      </div>
    </>
  );
};

export default Balance;
