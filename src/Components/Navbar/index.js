import React from 'react'

const  Navbar = () => {
    return (
<nav className="navbar Nav ">
        <div className="container">
          <h2 className="title">Zwallet</h2>
          <img
            src="images/robert.png"
            alt=""
            width="45"
            height="45"
            className="skip"
          />
          <div>
          <p className='h'>Robert Chandler </p>
          <span>089723912423</span>
          </div>
        </div>
      </nav>
    )
}

export default  Navbar
