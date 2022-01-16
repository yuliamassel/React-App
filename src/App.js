import React from 'react'
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
import PersonalInfo from './Pages/PersonalInfo/PersonalInfo';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Pin from './Pages/CreatePin/Pin';
import PinSucces from './Pages/CreatePin/PinSucces';
import ChangePin from './Pages/PersonalInfo/ChangePin';
import NewPin from './Pages/PersonalInfo/NewPin';
import ManagePn from './Pages/PersonalInfo/ManagePn';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Home" element={<RequireAuth><Home/></RequireAuth>}/>
        <Route path="History" element={<RequireAuth> <History/></RequireAuth>}/>
        <Route path="Search-Receiver" element={<RequireAuth><Search/></RequireAuth>}/>
        <Route path="Input-Blank/:id" element={<RequireAuth><InputAmount/></RequireAuth>}/>
        <Route path="Input-Filled" element={<RequireAuth><InputFilled/></RequireAuth>}/>
        <Route path="Comfirmation" element={<RequireAuth><Comfirmation/></RequireAuth>}/>
        <Route path="Profile" element={<RequireAuth><Profile/></RequireAuth>}/>
        <Route path="Personal-Info" element={<RequireAuth><PersonalInfo/></RequireAuth>}/>
        <Route path="Change-PIN" element={<RequireAuth><ChangePin/></RequireAuth>}/>
        <Route path="New-PIN" element={<RequireAuth><NewPin/></RequireAuth>}/>
        <Route path="Manage-Phone-Number" element={<RequireAuth><ManagePn/></RequireAuth>}/>

        <Route path="login" element={<Login/>}/>
        <Route path="SignUp" element={<SignUp/>}/>
        <Route path="Create-Pin" element={<Pin/>}/>
        <Route path="Pin-Succes" element={<PinSucces/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
