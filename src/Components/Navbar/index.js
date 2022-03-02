import React, {useEffect, useState} from "react";
// import axios from "axios";
// import Modal from "../Modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GetUser } from "../../redux/action/users";
import { BiBell} from "react-icons/bi";

const Navbar = () => {
  
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const {data} = useSelector((state)=> state.GetUser)

  useEffect(()=>{
    dispatch(GetUser())
  },[dispatch])

  return (
    <nav className="navbar Nav ">
      <div className="container">
        <h2 className="title">Zwallet</h2>
        <img
           src={data.photo ? data.photo : '/images/Bobi.png'}
          alt=""
          width="45"
          height="45"
          className="skip"
        />
        <div>
          <p className="h fw-bold">{data ? data.username : ""} </p>
          <span>{data ? data.telephone : "-"}</span>
          <BiBell size={30} className="icon-button" onClick={()=> setOpen(!open)}/>
          {/* <Modal/> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
