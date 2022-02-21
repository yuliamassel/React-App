import React, {useEffect} from "react";
// import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GetUser } from "../../redux/action/users";

const Navbar = () => {
  
  
  // const [user, setUser]= useState(null)
  const dispatch = useDispatch()

  const {data, loading, error} = useSelector((state)=> state.GetUser)

  useEffect(()=>{
    dispatch(GetUser())
  },[dispatch])

  return (
    <nav className="navbar Nav ">
      <div className="container">
        <h2 className="title">Zwallet</h2>
        <img
          src="http://localhost:3000/images/robert.png"
          alt=""
          width="45"
          height="45"
          className="skip"
        />
        <div>
          <p className="h fw-bold">{data ? data.username : ""} </p>
          <span>{data ? data.telephone : "-"}</span>
          <img
            className="position-absolute ms-3"
            src="images/bell.svg"
            alt=""
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
