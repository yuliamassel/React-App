import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Pages/Home';
import Login from './Pages/Login'
import SignUp from './Pages/SignUp';
import History from './Pages/History';
import Search from './Pages/Transfer/Search';
import InputAmount from './Pages/Transfer/InputAmount';
import InputFilled from './Pages/Transfer/InputFilled';
import Comfirmation from './Pages/Comfirmation';
import Profile from './Pages/Profile';
import PersonalInfo from './Pages/PersonalInformation/PersonalInfo'
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Pin from './Pages/CreatePin/Pin';
import PinSucces from './Pages/CreatePin/PinSucces';
import ChangePin from './Pages/PersonalInformation/ChangePin';
import NewPin from './Pages/PersonalInformation/NewPin';
import ManagePn from './Pages/PersonalInformation/ManagePn';
import EditProfile from './Pages/EditProfile';
import { io } from 'socket.io-client';
import LandingPage from './Pages/LandingPage/LandingPage';
import ResetPass from './Pages/resetpass';
import TopUp from './Pages/TopUp';
import AddPhone from './Pages/PersonalInformation/AddPhone';

const App = () => {

  useEffect(()=>{
    const socket = io("http://localhost:2002")
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="Home" element={<RequireAuth><Home/></RequireAuth>}/>
        <Route path="TopUp" element={<RequireAuth><TopUp/></RequireAuth>}/>
        <Route path="History" element={<RequireAuth> <History/></RequireAuth>}/>
        <Route path="Search-Receiver" element={<RequireAuth><Search/></RequireAuth>}/>
        <Route path="Input-Blank/:id" element={<RequireAuth><InputAmount/></RequireAuth>}/>
        <Route path="Input-Filled" element={<RequireAuth><InputFilled/></RequireAuth>}/>
        <Route path="Comfirmation" element={<RequireAuth><Comfirmation/></RequireAuth>}/>
        <Route path="Profile" element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path='My-Profile' element={<RequireAuth><EditProfile/></RequireAuth>}/>
        <Route path="Personal-Info" element={<RequireAuth><PersonalInfo/></RequireAuth>}/>
        <Route path="Change-PIN" element={<RequireAuth><ChangePin/></RequireAuth>}/>
        <Route path="New-PIN" element={<RequireAuth><NewPin/></RequireAuth>}/>
        <Route path="Manage-Phone-Number" element={<RequireAuth><ManagePn/></RequireAuth>}/>
        <Route path='Add-Phone-Number' element={<RequireAuth><AddPhone/></RequireAuth>}/>
        <Route path='/' element={<LandingPage/>}/>

        <Route path="login" element={<Login/>}/>
        <Route path="SignUp" element={<SignUp/>}/>
        <Route path='Reset-Password' element={<ResetPass/>}/>
        <Route path="Create-Pin" element={<Pin/>}/>
        <Route path="Pin-Succes" element={<PinSucces/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
