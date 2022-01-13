import React from 'react'

const  Navbar = () => {

  const user = JSON.parse(localStorage.getItem('user')) 
  

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
          <p className='h fw-bold'>{user.username} </p>
          <span>{user.telephone}</span>
          <img className='position-absolute ms-3' src="images/bell.svg" alt="" />
          </div>
        </div>
      </nav>
    )
}

export default  Navbar
