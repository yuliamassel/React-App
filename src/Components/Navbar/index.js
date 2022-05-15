import React, {useEffect} from "react";
// import axios from "axios";
// import Modal from "../Modal";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { GetUser } from "../../redux/action/users";
// import { BiBell} from "react-icons/bi";
import DropDown from "../Dropdown/Dropdown";

const Navbar = ({...props}) => {
  
  // const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const {data} = useSelector((state)=> state.GetUser)

  useEffect(()=>{
    dispatch(GetUser())
  },[dispatch])

  return (
    <nav {...props}>
      <div className="container">
        <h2 className="title d-none d-lg-block">Zwallet</h2>
        <div className="d-flex flex-row">
        <img
           src={data.photo ? data.photo : '/images/Bobi.png'}
          alt=""
          width="45"
          height="45"
          className="skip"
        />
 
          <div className="d-flex flex-column">
            <p className="h d-block d-md-block d-lg-none ms-5 ps-3">Hello,</p>
          <p className="fw-bold mb-1 ms-lg-0 ms-5 ps-lg-0 ps-3">{data ? data.username : ""} </p>
          <p className="d-none d-md-none d-lg-block">{data.telephone ? data.telephone : "-"}</p>
          </div>
          <DropDown/>
          {/* <Modal/> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
