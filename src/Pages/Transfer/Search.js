import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Footer from "../../Components/Footer";
import Input from "../../Components/Input/Input";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/Sidebar";

const Search = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const querySearch = searchParams.get("search");

  useEffect(() => {
    const token = localStorage.getItem("token")
    const config = {
      headers : {Authorization : `Bearer ${token}`}
    }
    axios
      .get(`${process.env.REACT_APP_BACKEND_ZWALLET}/users?limit=5`, config)
      .then((res) => {
        const result = res.data.data;
        setUsers(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(
    
    () => {
      const token = localStorage.getItem("token")
      const config = {
        headers : {Authorization : `Bearer ${token}`}
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
    <div className="body">
      <Navbar />
      <div className="container d-flex flex-row">
        <Sidebar />
        <div className="shape big-box mt-4">
          <h5 className="p-2 fw-bold">Search Receiver</h5>
          <Input
            className="search-input"
            onKeyUp={handleSearch}
            placeholder="Search receiver here"
            type="text"
            name="search"
          />
          <div className="search-receiver">
          {/* <Link to="/input-blank" className='text-decoration-none text-dark'> */}
          {users.map((dataUser) => (
            <div
              className="search-user ms-4 mt-4"
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
