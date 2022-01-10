import React from "react";
import Button from "../Button/Index";

const Balance = () => {
  return (
    <>
      <div className="balance shape-blue mt-4">
        <div className="text-white p-3">
          <p>Balance</p>
          <h4 className="fw-bold">Rp.120.000</h4>
          <span>08923243556</span>
        </div>
        <div className="d-flex flex-column p-3 me-5">
          <Button className="btn-balance"><img src="/images/arrow-grey.png" alt="" /> Transfer</Button>
          <Button className="btn-balance"><img src="/images/plus-grey.png" alt="" /> Top Up</Button>
        </div>
      </div>
    </>
  );
};

export default Balance;
