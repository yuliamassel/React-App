import React, { useEffect, useState} from "react";
// import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Input from "../Components/Input/Input";
// import { useDispatch } from "react-redux";
// import { UpdateUser } from "../redux/action/users";
import Button from "../Components/Button/Index";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ChangePhoto } from "../redux/action/uploadFile";
import { GetUser } from "../redux/action/users";

const EditProfile = () => {
  const [form, setFrom] = useState({photo:null});
  // const [user, setUser] = useState({})
  const navigate = useNavigate()
  // let userInfo = localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')): {}
  const dispatch = useDispatch()


  const FormUpdateUser = new FormData()
  FormUpdateUser.append('photo', form.photo)

  const handleChange = (e) => {
    setFrom({
      ...form,
      photo: e.target.files[0]
    });
  };

  useEffect(() => {
    dispatch(GetUser())
  }, []);

  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(ChangePhoto({FormUpdateUser}))
    navigate("/home");
    console.log(form);
  }

  return (
    <div className="body">
      <Navbar />
      <div className="container d-flex flex-row">
        <Sidebar />
        <div className="shape big-box d-flex flex-column justify-content-center align-items-center mt-4">
          <h5 className="fw-bold p-4">Edit Profile</h5>
          <form encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
            <Input
              className="photo pb-5 mb-5"
              type="file"
              id="files"
              name="file"
              onChange={handleChange}
              placeholder="photo"
            />
                  {form.photo ? (
              <img
                className="picture"
                src={URL.createObjectURL(form.photo)}
                alt="ProfilePicture"
                width={150}
              />
            ) : (
              <img className="picture" src='images/blank-profile.png' alt="ProfilePicture"  width={200}/>
            )}
          <Button type="submit" className="btn-small mt-4">Edit</Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;
