import React, {useEffect} from 'react'
// import axios from 'axios';
import * as BsIcons from "react-icons/fi";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { useDispatch, useSelector } from 'react-redux';
import { GetUser } from '../../redux/action/users';

const ManagePn = () => {

  const dispatch = useDispatch()

  const {data} = useSelector((state)=> state.GetUser)

  useEffect(()=>{
    dispatch(GetUser())
  },[dispatch])


    return (
        <div className="body">
        <Navbar />
        <div className="container ps-5 ms-5  d-flex flex-row">
          <Sidebar />
          <div className="shape big-box mt-4">
            <h5 className="fw-bold p-3">Manage Phone Number</h5>
            <p className="desc fw-normal fs-6 ms-3">
            You can only delete the phone number and then <br /> you must add another phone number.
            </p>
            <div className="search-user ms-4 mt-4 p-2 d-flex justify-content-between">
                <p className='ms-2'>Primary <br /><h5 className='position-absolute'>{data ? data.telephone : "-"}</h5></p>
                {/* <img className='mt-2 me-3' src="/images/trash.png" alt="" width={30} height={30}/> */}
                <BsIcons.FiTrash className='mt-3 me-3 trash'  size={25}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
}

export default ManagePn
