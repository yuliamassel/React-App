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
          <h4 className="fw-bold">{ballance}</h4>
          <span>{telephone}</span>
        </div>
        <div className="d-flex flex-column p-3 me-5">
          <Button className="btn-balance" onClick={handleClick}><img src="/images/arrow-grey.png" alt="" /> Transfer</Button>
          <Button className="btn-balance"><img src="/images/plus-grey.png" alt="" /> Top Up</Button>
        </div>
      </div>
    </>
  );
};

export default Balance;
