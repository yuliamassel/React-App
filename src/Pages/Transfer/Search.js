import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Components/Footer'
import Input from '../../Components/Input/Input'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'

const Search = () => {
    return (
        <div className='body'>
        <Navbar/>
        <div className="container d-flex flex-row">
            <Sidebar/>
            <div className="shape big-box mt-4">
                <h5 className='p-2 fw-bold'>Search Receiver</h5>
                <Input className="search-input" placeholder="Search receiver here" type="text"/>
                <Link to="/input-blank" className='text-decoration-none text-dark'>
                <div className="search-user ms-4 mt-4">
                  <img className='ms-2 me-3' width="50" src="images/samuel.svg" alt="" />
                  <h6 className="fw-bold mt-3">Samuel Suhi <br /> <p className="desc">+62789564234</p></h6>
                </div>
                </Link>
                <div className="search-user ms-4 mt-4">
                  <img className='ms-2 me-3 mt-2' width="50" height="50" src="/images/momo2.png" alt="" />
                  <h6 className="fw-bold mt-3">Momo Taro <br /> <p className="desc">+623456543987</p></h6>
                </div>
                <div className="search-user ms-4 mt-4">
                  <img className='ms-2 me-3' width="50" src="images/keen.svg" alt="" />
                  <h6 className="fw-bold mt-3">Jessica Keen <br /> <p className="desc">+62985676587</p></h6>
                </div>
                <div className="search-user ms-4 mt-4">
                  <img className='ms-2 me-3 mt-2' width="50" height="50" src="/images/robert.png" alt="" />
                  <h6 className="fw-bold mt-3">Michael Lee <br /> <p className="desc">+6223487650</p></h6>
                </div>
            </div>
        </div>
           <Footer/>
      </div>
    )
}

export default Search
