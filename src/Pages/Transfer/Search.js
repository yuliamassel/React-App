import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Footer from "../../Components/Footer";
import Input from "../../Components/Input/Input";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import * as BsIcons from "react-icons/bs";


const Search = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get("search");

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"))
    const config = {
      headers : {Authorization : `Bearer ${userInfo.token}`}
    }
    axios
      .get(`${process.env.REACT_APP_BACKEND_ZWALLET}/users`, config)
      .then((res) => {
        const result = res.data.data;
        console.log("result get all user", result)
        setUsers(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(
    
    () => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"))
      const config = {
        headers : {Authorization : `Bearer ${userInfo.token}`}
      }
      if (querySearch) {
        axios
        .get(
          `${process.env.REACT_APP_BACKEND_ZWALLET}/users?username=${querySearch}`,config
        )
        .then((res) => {
          const result = res.data.data;
          setUsers(result);
        })
        .catch((err) => {
          console.log(err);
        });
      }
    },
    [querySearch]
  );

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearchParams({ search: e.target.value });
    }
  };

  return (
    <div className="body col-lg-12 col-12">
      <Navbar className="navbar Nav d-none d-md-none d-lg-block"/>
      <div className="container ps-lg-5 ms-lg-5  d-flex flex-row">
        <Sidebar />
        <div className="shape big-box mt-lg-4">
          <div className="d-flex flex-row my-lg-0 my-4">
          <BsIcons.BsArrowLeftShort className="d-block d-lg-none mt-1" size={28}/>
          <h5 className="p-2 fw-bold">Search Receiver</h5>
          </div>
          <Input
            className="search-input"
            onKeyUp={handleSearch}
            placeholder="Search receiver here"
            type="text"
            name="search"
          />

<div className="quick-acces d-block d-lg-none">
            <h3>Quick Acces</h3>
            <div className="person">
              <div className="user1 me-3">
                <img src="/images/michi.png" alt=""/>
                <p className="my-1">Michi</p>
                <span>-9994</span>
              </div>
              <div className="user1 me-3">
                <img src="/images/momo2.png" alt=""/>
                <p className="my-1">Dody</p>
                <span>-3561</span>
              </div>
              <div className="user1 me-3">
                <img src="/images/ryan.png" alt=""/>
                <p className="my-1">Ryan</p>
                <span>-3822</span>
              </div>
              <div className="user1 me-3">
                <img src="/images/rich.png" alt=""/>
                <p className="my-1">Juliana</p>
                <span>-5563</span>
              </div>
            </div>
          </div>

          <div className="search-receiver">
          {/* <Link to="/input-blank" className='text-decoration-none text-dark'> */}
          {users.map((dataUser) => (
            <div
              className="search-user ms-lg-4 mt-lg-4"
              onClick={() => navigate(`/input-blank/${dataUser.id}`)}
            >
              <img
                className="ms-2 me-3"
                width="50"
                src="images/samuel.svg"
                alt=""
              />
              <h6 className="fw-bold mt-3">
                {dataUser.username} <br />{" "}
                <p className="desc">{dataUser.telephone}</p>
              </h6>
            </div>
          ))}
          </div>

          {/* </Link> */}
          {/* <div className="search-user ms-4 mt-4">
                  <img className='ms-2 me-3 mt-2' width="50" height="50" src="/images/momo2.png" alt="" />
                  <h6 className="fw-bold mt-3">Momo Taro <br /> <p className="desc">+623456543987</p></h6>
                </div>
                <div className="search-user ms-4 mt-4">
                  <img className='ms-2 me-3' width="50" src="images/keen.svg" alt="" />
                  <h6 className="fw-bold mt-3">Jessica Keen <br /> <p className="desc">+62985676587</p></h6>
                </div>
                <div className="search-user ms-4 mt-4">
                  <img className='ms-2 me-3 mt-2' width="50" height="50" src="/images/robert.png" alt="" />
                  <h6 className="fw-bold mt-3">Michael Lee <br /> <p className="desc">+6223487650</p></h6>
                </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
