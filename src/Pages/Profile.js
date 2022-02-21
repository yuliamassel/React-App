import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Profile = () => {

    const [user, setUser]= useState(null)

    useEffect(()=>{
      const token = localStorage.getItem("token")
      const config = {
        headers : {Authorization : `Bearer ${token}`}
      }
      // const userFromLS = JSON.parse(localStorage.getItem("user"))
      // console.log(userFromLS);
      axios.get(`${process.env.REACT_APP_BACKEND_ZWALLET}/users/profile/`,config)
      .then((res) => {
        const result = res.data.data;
        console.log(res.data.data);
        setUser(result);
      })
      .catch((err) => {
        console.log(err);
      });
    },[])

    const navigate = useNavigate()

    const handleLogout= ()=>{
      localStorage.removeItem('auth')
      localStorage.removeItem('user')
      navigate('/login')
    }

    return (
        <div className='body'>
       <Navbar/>
        <div className="container d-flex flex-row">
            <Sidebar/>
            <div className="shape big-box d-flex flex-column justify-content-center align-items-center mt-4">
                <img className='mb-1 mt-5' src="images/Christine.svg" alt="" width="80" height="80"/>
                <p><Link to='/My-Profile' className='desc'>Edit</Link></p>
                <h5 className='fw-bold fs-6'>{user ? user.username : ""}</h5>
                <p className="desc">{user ? user.telephone: "-"}</p>
                <div className="choice mb-3"><p className='desc fs-6 ms-1 mt-2'>Personal Information</p><Link to="/Personal-Info"> <img className='mt-2 ms-5' src="images/arrow-left.svg" alt="" width="28" height="28"/></Link></div>
                <div className="choice mb-3"><p className='desc fs-6 ms-1 mt-2'>Change Password</p> <img className='mt-2 ms-5' src="images/arrow-left.svg" alt="" width="28" height="28"/></div>
                <div className="choice mb-3"><p className='desc fs-6 me-5 mt-2'>Change PIN</p><Link to="/Change-PIN"> <img className='mt-2 ms-5' src="images/arrow-left.svg" alt="" width="28" height="28"/></Link></div>
                <div className="choice d-flex justify-content-start mb-3" onClick={handleLogout}><p className='desc fs-6 ms-5 mt-2'>Logout</p></div>
            </div>
        </div>
           <Footer/>
      </div>
    )
}

export default Profile
