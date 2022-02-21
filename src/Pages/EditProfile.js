import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Input from "../Components/Input/Input";
import { useDispatch } from "react-redux";
import { UpdateUser } from "../redux/action/users";
import Button from "../Components/Button/Index";

const EditProfile = () => {
  const [form, setFrom] = useState({
    photo: "",
    username: "",
    email: "",
    password: "",
    addres: "",
  });

  const FormUpdateUser = new FormData()
  FormUpdateUser.append('photo', form.photo)
  FormUpdateUser.append('username', form.username)
  FormUpdateUser.append('email', form.email)
  FormUpdateUser.append('password', form.password)
  FormUpdateUser.append('addres', form.addres)

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFrom({
      ...form,
      [e.target.name]: e.currentTarget.value,
    });
  };

  useEffect(() => {
    dispatch(UpdateUser());
  }, []);

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(form);
  }

  return (
    <div className="body">
      <Navbar />
      <div className="container d-flex flex-row">
        <Sidebar />
        <div className="shape big-box d-flex flex-column mt-4">
          <h5 className="fw-bold p-4">Edit Profile</h5>
          <form encType="multipart/form-data" onSubmit={(e)=>handleSubmit(e)}>
          <div>
              {/* <img className="cam" src="images/camera.svg" alt=""  width="32" height="32"/> */}
              <i className="bi bi-camera-fill cam  ms-5 mt-2"></i>
            <label htmlFor="files">photo</label>
            <Input
              className="mb-5"
              title="Photo"
              id="files"
              type="file"
              name="email"
              onChange={(e)=> setFrom({...form, photo: e.currentTarget.files})}
              // value={form.email}
              placeholder="photo"
            />
          </div>
          {/* <img
            className="mb-1 mt-5"
            src="images/Christine.svg"
            alt=""
            width="80"
            height="80"
          /> */}
          <div>
            <img
              className="position-absolute ms-5 mt-3"
              src="images/person.svg"
              alt=""
            />
            <Input
              className="edit-profile"
              type="text"
              name="username"
              onChange={handleChange}
              value={form.username}
              placeholder="username"
            />
          </div>
          <div>
            <img
              className="position-absolute ms-5 mt-3"
              src="images/mail.svg"
              alt=""
            />
            <Input
              className="edit-profile"
              type="email"
              name="email"
              onChange={handleChange}
              value={form.email}
              placeholder="e-mail"
            />
          </div>
          <div>
            {" "}
            <img
              className="position-absolute ms-5 mt-3"
              src="images/lock.svg"
              alt=""
            />
            <Input
              className="edit-profile"
              type="password"
              name="password"
              onChange={handleChange}
              value={form.password}
              placeholder="password"
            />
          </div>
          <div><i className="bi bi-house-fill cam ms-5 mt-2"></i>
          <Input
            className="edit-profile"
            type="text"
            name="addres"
            onChange={handleChange}
            value={form.addres}
            placeholder="addres"
          />
          </div>
          <Button type="submit" className="btn-small mt-4">Edit</Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfile;
