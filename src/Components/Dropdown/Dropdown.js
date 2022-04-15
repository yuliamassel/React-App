import React, { useState } from "react";
// import styles from "../../styles/auth.module.css";
import * as BsIcons from "react-icons/bi";

const DropDown = () => {
  const [isActive, setIsActive] = useState(false);
  // const options = ["Economy", "Politics", "Country", "Healty", "Beauty"];

  return (
    <div>
      <BsIcons.BiBell
        size={30}
        className="icon-button"
        onClick={(e) => setIsActive(!isActive)}
      />
      {isActive && <div className="modal-notif"></div>}
      </div>
  );
};

export default DropDown;
