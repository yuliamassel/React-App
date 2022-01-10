import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Profile = () => {
    return (
        <div className='body'>
       <Navbar/>
        <div className="container d-flex flex-row">
            <Sidebar/>
            <div className="shape big-box d-flex flex-column justify-content-center align-items-center mt-4">
                <img className='mb-1 mt-5' src="images/Christine.svg" alt="" width="80" height="80"/>
                <p>Edit</p>
                <h5 className='fw-bold fs-6'>Christine</h5>
                <p className="desc">+62789564234</p>
                <div className="choice mb-3"><p className='desc fs-6 ms-1 mt-2'>Personal Information</p><Link to="/Personal-Info"> <img className='mt-2 ms-5' src="images/arrow-left.svg" alt="" width="28" height="28"/></Link></div>
                <div className="choice mb-3"><p className='desc fs-6 ms-1 mt-2'>Change Password</p> <img className='mt-2 ms-5' src="images/arrow-left.svg" alt="" width="28" height="28"/></div>
                <div className="choice mb-3"><p className='desc fs-6 me-5 mt-2'>Change PIN</p> <img className='mt-2 ms-5' src="images/arrow-left.svg" alt="" width="28" height="28"/></div>
                <div className="choice d-flex justify-content-start mb-3"><p className='desc fs-6 ms-5 mt-2'>Logout</p></div>
            </div>
        </div>
           <Footer/>
      </div>
    )
}

export default Profile
