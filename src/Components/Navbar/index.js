import React, {useEffect, useState} from "react";
// import axios from "axios";
// import Modal from "../Modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GetUser } from "../../redux/action/users";
import { BiBell} from "react-icons/bi";
import DropDown from "../Dropdown/Dropdown";

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
        <div className="d-flex flex-row">
        <img
           src={data.photo ? data.photo : '/images/Bobi.png'}
          alt=""
          width="45"
          height="45"
          className="skip"
        />
 
          <div className="h d-flex flex-column">
          <p className="fw-bold mb-1">{data ? data.username : ""} </p>
          <p>{data.telephone ? data.telephone : "-"}</p>
          </div>
          <DropDown/>
          {/* <Modal/> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
