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
import PersonalInfo from './Pages/PersonalInfo';
import Main from './Pages/Main';
import RequireAuth from './Components/Require/RequireAuth';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        
        <Route path="login" element={<RequireAuth><Login/></RequireAuth>}/>
        <Route path="SignUp" element={<SignUp/>}/>
        <Route path="Home" element={<Home/>}/>
        <Route path="History" element={<History/>}/>
        <Route path="Search-Receiver" element={<Search/>}/>
        <Route path="Input-Blank" element={<InputAmount/>}/>
        <Route path="Input-Filled" element={<InputFilled/>}/>
        <Route path="Comfirmation" element={<Comfirmation/>}/>
        <Route path="Profile" element={<Profile/>}/>
        <Route path="Personal-Info" element={<PersonalInfo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
