import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import "./hamburger.module.css";

function Hamburger() {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  console.log(sidebar);
  return (
    <>
      <div className="hamburger" onClick={showSidebar}>
        <FaBars />
      </div>
      {/* <div className={!sidebar?"active":"nav-menut"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <div className="cross">
              {" "}
              <AiOutlineClose />
            </div>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <span className="text">{item.title}</span>
                <span className="icon"> {item.icon}</span>
              </li>
            );
          })}
        </ul>
      </div> */}
    </>
  );
}

export default Hamburger;
