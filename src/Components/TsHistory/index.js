import React from "react";
import { Link } from "react-router-dom";

const TransactionHistory = () => {
  return (
    <>
      <div className=" box shape d-flex flex-row flex-wrap  overflow-auto">
        <div className="text-history">
          <h6 className="fw-bold">
            Transaction History
          </h6>
          <p className="text-info mb-2"><Link to='/history'> See All</Link></p>
        </div>

        <div className="user mt-5">
          <div className="users">
            <img className="me-3" src="/images/samuel.svg" alt="" />
            <h6 className="fw-bold mt-2">Samuel Suhi <br /> <p className="desc">Transfer</p></h6>
            <span className="price mt-3 ">+Rp.50.000</span>
          </div>
          <div className="users">
            <img className="me-3" src="images/logo-N.svg" alt="" />
            <h6 className="fw-bold mt-2">Netflix <br /> <p className="desc">Subcription</p></h6>
            <span className="price2 mt-2">-Rp.149.000</span>
          </div>
          <div className="users">
            <img className="me-3" src="images/Christine.svg" alt="" />
            <h6 className="fw-bold mt-2">Christine <br /> <p className="desc">Transfer</p></h6>
            <span className="price ps-4 mt-3 ">+Rp.150.000</span>
          </div>
          <div className="users">
            <img className="me-3" src="images/logo-A.svg" alt="" />
            <h6 className="fw-bold mt-2">Adobe <br /> <p className="desc">Subcription</p></h6>
            <span className="price2 mt-2">-Rp.249.000</span>
          </div>
          <div className="users">
            <img className="me-3" src="images/logo-A.svg" alt="" />
            <h6 className="fw-bold mt-2">Adobe <br /> <p className="desc">Subcription</p></h6>
            <span className="price2 mt-2">-Rp.149.000</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
