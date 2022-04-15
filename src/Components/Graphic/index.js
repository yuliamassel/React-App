import React from "react";

const Graphic = ({income, expense}) => {
  return (
    <>
      <div className=" me-4 box shape d-flex flex-row flex-wrap">
            <div className="income">
            <img src="images/arrow-green.svg" alt=""/>
            <p>Income</p>
            <h6>Rp{income}</h6>
          </div>
          <div className="exphanse">
            <img src="images/arrow-red.svg" alt=""/>
            <p>Exphense</p>
            <h6>Rp{expense}</h6>
          </div>
          <img className="ms-5 mb-1" src="/images/graphic.svg" alt="" width="270" />
        </div>
    </>
  );
};

export default Graphic;
