import React from 'react'
import BoxAction from '../Components/BoxAction'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const History = () => {
    return (
        <div className='body'>
          <Navbar/>
        <div className="container d-flex flex-row">
          <Sidebar/>
          <BoxAction>
            <h5 className='fw-bold p-3'>Transaction History</h5>
            <p className='fs-6 ms-3'>This Week</p>
            <div className="users">
            <img className="me-3 ps-2" src="/images/samuel.svg" alt="" />
            <h6 className="fw-bold mt-2">Samuel Suhi <br /> <p className="desc">Transfer</p></h6>
            <span className="price mt-3 week">+Rp.50.000</span>
          </div>
          <div className="users">
            <img className="me-3 ps-2" src="images/logo-N.svg" alt="" />
            <h6 className="fw-bold mt-2">Netflix <br /> <p className="desc">Subcription</p></h6>
            <span className="price2 mt-2 week ps-4">-Rp.149.000</span>
          </div>
          <p className='fs-6 ms-3 mt-1'>This Month</p>
          <div className="users">
            <img className="me-3 ps-2" src="images/Christine.svg" alt="" />
            <h6 className="fw-bold mt-2">Christine <br /> <p className="desc">Transfer</p></h6>
            <span className="price ps-4 mt-3 week">+Rp.150.000</span>
          </div>
          <div className="users">
            <img className="me-3 ps-2" src="images/logo-A.svg" alt="" />
            <h6 className="fw-bold mt-2">Adobe <br /> <p className="desc">Subcription</p></h6>
            <span className="price2 mt-2 week ps-4">-Rp.249.000</span>
          </div>
          </BoxAction>
        </div>
        <Footer/>
      </div>
    )
}

export default History
